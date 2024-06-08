import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProtobufDataList } from "./protobufData/ProtobufDataList";
import { ProtobufDataCreate } from "./protobufData/ProtobufDataCreate";
import { ProtobufDataEdit } from "./protobufData/ProtobufDataEdit";
import { ProtobufDataShow } from "./protobufData/ProtobufDataShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"data-collect"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ProtobufData"
          list={ProtobufDataList}
          edit={ProtobufDataEdit}
          create={ProtobufDataCreate}
          show={ProtobufDataShow}
        />
      </Admin>
    </div>
  );
};

export default App;
