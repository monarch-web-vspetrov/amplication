import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { QueueStatusList } from "./queueStatus/QueueStatusList";
import { QueueStatusCreate } from "./queueStatus/QueueStatusCreate";
import { QueueStatusEdit } from "./queueStatus/QueueStatusEdit";
import { QueueStatusShow } from "./queueStatus/QueueStatusShow";
import { AccountList } from "./account/AccountList";
import { AccountCreate } from "./account/AccountCreate";
import { AccountEdit } from "./account/AccountEdit";
import { AccountShow } from "./account/AccountShow";
import { VerificationTokenList } from "./verificationToken/VerificationTokenList";
import { VerificationTokenCreate } from "./verificationToken/VerificationTokenCreate";
import { VerificationTokenEdit } from "./verificationToken/VerificationTokenEdit";
import { VerificationTokenShow } from "./verificationToken/VerificationTokenShow";
import { SessionList } from "./session/SessionList";
import { SessionCreate } from "./session/SessionCreate";
import { SessionEdit } from "./session/SessionEdit";
import { SessionShow } from "./session/SessionShow";
import { QueueList } from "./queue/QueueList";
import { QueueCreate } from "./queue/QueueCreate";
import { QueueEdit } from "./queue/QueueEdit";
import { QueueShow } from "./queue/QueueShow";
import { CarBrandList } from "./carBrand/CarBrandList";
import { CarBrandCreate } from "./carBrand/CarBrandCreate";
import { CarBrandEdit } from "./carBrand/CarBrandEdit";
import { CarBrandShow } from "./carBrand/CarBrandShow";
import { QueueHistoryList } from "./queueHistory/QueueHistoryList";
import { QueueHistoryCreate } from "./queueHistory/QueueHistoryCreate";
import { QueueHistoryEdit } from "./queueHistory/QueueHistoryEdit";
import { QueueHistoryShow } from "./queueHistory/QueueHistoryShow";
import { CarList } from "./car/CarList";
import { CarCreate } from "./car/CarCreate";
import { CarEdit } from "./car/CarEdit";
import { CarShow } from "./car/CarShow";
import { ServiceList } from "./service/ServiceList";
import { ServiceCreate } from "./service/ServiceCreate";
import { ServiceEdit } from "./service/ServiceEdit";
import { ServiceShow } from "./service/ServiceShow";
import { CarTypeList } from "./carType/CarTypeList";
import { CarTypeCreate } from "./carType/CarTypeCreate";
import { CarTypeEdit } from "./carType/CarTypeEdit";
import { CarTypeShow } from "./carType/CarTypeShow";
import { BoxList } from "./box/BoxList";
import { BoxCreate } from "./box/BoxCreate";
import { BoxEdit } from "./box/BoxEdit";
import { BoxShow } from "./box/BoxShow";
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
        title={"queue"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="QueueStatus"
          list={QueueStatusList}
          edit={QueueStatusEdit}
          create={QueueStatusCreate}
          show={QueueStatusShow}
        />
        <Resource
          name="Account"
          list={AccountList}
          edit={AccountEdit}
          create={AccountCreate}
          show={AccountShow}
        />
        <Resource
          name="VerificationToken"
          list={VerificationTokenList}
          edit={VerificationTokenEdit}
          create={VerificationTokenCreate}
          show={VerificationTokenShow}
        />
        <Resource
          name="Session"
          list={SessionList}
          edit={SessionEdit}
          create={SessionCreate}
          show={SessionShow}
        />
        <Resource
          name="Queue"
          list={QueueList}
          edit={QueueEdit}
          create={QueueCreate}
          show={QueueShow}
        />
        <Resource
          name="CarBrand"
          list={CarBrandList}
          edit={CarBrandEdit}
          create={CarBrandCreate}
          show={CarBrandShow}
        />
        <Resource
          name="QueueHistory"
          list={QueueHistoryList}
          edit={QueueHistoryEdit}
          create={QueueHistoryCreate}
          show={QueueHistoryShow}
        />
        <Resource
          name="Car"
          list={CarList}
          edit={CarEdit}
          create={CarCreate}
          show={CarShow}
        />
        <Resource
          name="Service"
          list={ServiceList}
          edit={ServiceEdit}
          create={ServiceCreate}
          show={ServiceShow}
        />
        <Resource
          name="CarType"
          list={CarTypeList}
          edit={CarTypeEdit}
          create={CarTypeCreate}
          show={CarTypeShow}
        />
        <Resource
          name="Box"
          list={BoxList}
          edit={BoxEdit}
          create={BoxCreate}
          show={BoxShow}
        />
      </Admin>
    </div>
  );
};

export default App;
