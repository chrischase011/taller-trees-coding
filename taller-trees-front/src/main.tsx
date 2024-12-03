import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <html>
			<body>
				<Theme>
					<App />
				</Theme>
			</body>
		</html>
  </StrictMode>,
)
