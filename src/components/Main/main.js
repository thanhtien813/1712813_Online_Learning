import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeTabNavigator from '../Main/Home/home-tab-navigator';
import BrowseTabNavigator from '../Main/Browse/browse-tab-navigator';
import ProfileTabNavigator from '../AccountManagement/Profile/profile-tab-navigator';
import SearchTabNavigator from '../Main/Search/search-tab-navigator';
import { navName } from '../../Global/constant';
import { SettingCommonContext } from '../../providers/setting-common-provider';

const Tab = createBottomTabNavigator();

const Main = () => {
    const { theme } = React.useContext(SettingCommonContext);

    return (
        <Tab.Navigator initialRouteName={navName.browse}
            tabBarOptions={{
                activeTintColor: '#FF5252',
                style: {
                    backgroundColor: theme ? '#212121' : '#fff'
                }
            }}
        >
            <Tab.Screen name={navName.home} 
                component={HomeTabNavigator}
                options={{
                    tabBarLabel: navName.home,
                    tabBarIcon: ({ color }) => {
                        return <Icon name="home" size={27} color={color} />;
                    },
                }}
            />
            <Tab.Screen name={navName.search} 
                component={SearchTabNavigator}
                options={{
                    tabBarLabel: navName.search,
                    tabBarIcon: ({ color }) => {
                        return <Icon name="search" size={27} color={color} />;
                    }
                }}
            />
            <Tab.Screen name={navName.browse} 
                component={BrowseTabNavigator}
                options={{
                    tabBarLabel: navName.browse,
                    tabBarIcon: ({ color }) => {
                        return <Icon name="folder-open" size={27} color={color} />;
                    }
                }}
            />
            <Tab.Screen name={navName.profile}
                component={ProfileTabNavigator}
                options={{
                    tabBarLabel: navName.profile,
                    tabBarIcon: ({ color }) => {
                        return <Icon name="user" size={27} color={color} />;
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default Main;