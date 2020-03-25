import React from "react";
import { PortfolioService } from "./sections/services/portfolio.service";

const AppContext = React.createContext({
  portfolioService: new PortfolioService()
});

export default AppContext;