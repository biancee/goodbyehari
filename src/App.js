import React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Switch, Route } from "react-router-dom";
import WriteMessage from "./WriteMessage";
import Homepage from "./Homepage";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/writemessage" component={WriteMessage} exact />
        <Route path="*" component={Homepage} />
      </Switch>
    </ChakraProvider>
  );
}

export default App;
