import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  ProductList as ProductListView,
  MonitoringVehicle as MonitoringVehicle,
  MonitoringLoad as MonitoringLoad,
  MonitoringFuel as MonitoringFuel,
  Typography as TypographyView,
  Icons as IconsView,
  Account as AccountView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView,
  VehicleList as VehicleTableView,
  DriverList as DriverTableView,
  addVehicle as AddVehicleView,
  addDriver as AddDriverView,
  Popup as Popup,
  Maps as Maps,
  ServiceReminder,
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/sign-in"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={MonitoringVehicle}
        exact
        layout={MainLayout}
        path="/monitoringVehicle"
      />
       <RouteWithLayout
        component={MonitoringLoad}
        exact
        layout={MainLayout}
        path="/monitoringLoad"
      />
        <RouteWithLayout
        component={MonitoringFuel}
        exact
        layout={MainLayout}
        path="/monitoringFuel"
      />
      <RouteWithLayout
        component={Maps}
        exact
        layout={MainLayout}
        path="/maps"
      />
      <RouteWithLayout
        component={ProductListView}
        exact
        layout={MainLayout}
        path="/products"
      />
       <RouteWithLayout
        component={Popup}
        exact
        layout={MainLayout}
        path="/popup"
      />
      <RouteWithLayout
        component={TypographyView}
        exact
        layout={MainLayout}
        path="/typography"
      />
      <RouteWithLayout
        component={IconsView}
        exact
        layout={MainLayout}
        path="/icons"
      />
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
      />
       <RouteWithLayout
        component={VehicleTableView}
        exact
        layout={MainLayout}
        path="/masterVehicle"
      />
        <RouteWithLayout
        component={ServiceReminder}
        exact
        layout={MainLayout}
        path="/serviceReminder"
      />
       <RouteWithLayout
        component={DriverTableView}
        exact
        layout={MainLayout}
        path="/masterDriver"
      />
      <RouteWithLayout
        component={AddVehicleView}
        exact
        layout={MainLayout}
        path="/addVehicle"
      />
       <RouteWithLayout
        component={AddDriverView}
        exact
        layout={MainLayout}
        path="/addDriver"
      />
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/sign-up"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
