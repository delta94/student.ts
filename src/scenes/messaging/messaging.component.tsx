import React from 'react';
import { Tab, TopNavigation, TopNavigationAction, TopNavigationActionElement } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { BrandTabBar } from '../../components/brand-tab-bar.component';
import { ArrowIosBackIcon, GridIcon, ListIcon } from '../../components/icons';

export const MessagingScreen = (props): React.ReactElement => {

  const onBackActionPress = (): void => {
    props.navigation.goBack(null);
  };

  const onTabSelect = (index: number): void => {
    props.navigation.navigate(props.state.routeNames[index]);
  };

  const renderBackAction = (): TopNavigationActionElement => (
    <TopNavigationAction
      icon={ArrowIosBackIcon}
      onPress={onBackActionPress}
    />
  );

  return (
    <SafeAreaLayout
      insets='top'
      level='2'>
      <TopNavigation
        title='Messaging'
        alignment='center'
        leftControl={renderBackAction()}
      />
      <BrandTabBar
        selectedIndex={props.state.index}
        onSelect={onTabSelect}>
        <Tab icon={GridIcon}/>
        <Tab icon={ListIcon}/>
      </BrandTabBar>
    </SafeAreaLayout>
  );
};
