import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import CategoryDisplay  from "./CategoryDisplay";
import CpenfDisplay from "./Cpenf/CpenfDisplay";
import HardcoverFDisplay from "./HardcoverF/HardcoverFDisplay";
import HardcoverNFDisplay from "./HardcoverNF/HardcoverNFDisplay";
import TradeFDisplay from "./TradeF/TradeFDisplay";

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes = [
  { path: '/combined-print-and-e-book-nonfiction',
    exact: true,
    
    main: () => <CpenfDisplay />
  },
  { path: '/combined-print-and-e-book-fiction',
    
    main: () => <CategoryDisplay />
  },
  { path: '/hardcover-fiction',
    
    main: () => <HardcoverFDisplay/>
  },
  { path: '/hardcover-nonfiction',
  
  main: () => <HardcoverNFDisplay/>
  },
  { path: '/trade-fiction-paperback',
  
  main: () => <TradeFDisplay/>
  }
]

const SidebarExample = () => (
  <Router>
    <div style={{ display: 'flex' }}>
      <div style={{
        padding: '10px',
        width: '40%',
        background: '#f0f0f0'
      }}>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><Link to="/combined-print-and-e-book-nonfiction">Combined Print and E-Book Nonfiction</Link></li>
          <li><Link to="/combined-print-and-e-book-fiction">Combined Print and E-Book Fiction</Link></li>
          <li><Link to="/hardcover-fiction">Hardcover Fiction</Link></li>
          <li><Link to="/hardcover-nonfiction">Hardcover Non Fiction</Link></li>
          <li><Link to="/trade-fiction-paperback">Trade Fiction</Link></li>
        </ul>

        {routes.map((route, index) => (
          // You can render a <Route> in as many places
          // as you want in your app. It will render along
          // with any other <Route>s that also match the URL.
          // So, a sidebar or breadcrumbs or anything else
          // that requires you to render multiple things
          // in multiple places at the same URL is nothing
          // more than multiple <Route>s.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.sidebar}
          />
        ))}
      </div>

      <div style={{ flex: 1, padding: '10px' }}>
        {routes.map((route, index) => (
          // Render more <Route>s with the same paths as
          // above, but different components this time.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </div>
    </div>
  </Router>
)

export default SidebarExample