import json
import pandas as pd

def run_datasets(city_path, property_path):
    # Load datasets
    with open(city_path, 'r') as f:
        city_trees = json.load(f)

    property_data = pd.read_csv(property_path, encoding='windows-1252')
    
    property_data['Price'] = property_data['Price'].replace('[€,]', '', regex=True).astype(float)
 
    # Map streets to categories
    def map_street_to_category(city_trees):
        street_category = {}
        for category, streets in city_trees.items():
            for subcategory in streets.values():
                for street, _ in subcategory.items():
                    street_category[street] = category
        return street_category

    street_category = map_street_to_category(city_trees)

    # Add category to property data
    property_data['Tree Category'] = property_data['Street Name'].map(street_category)

    # Calculate averages
    average_prices = property_data.groupby('Tree Category')['Price'].mean().to_dict()

    # Save results
    with open('assets/average_prices.json', 'w') as f:
        json.dump(average_prices, f)
