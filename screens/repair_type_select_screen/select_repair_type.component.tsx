
import { Text, View } from 'react-native';
import { WarningModal } from './components';

const SelectRepairTypeComponent: React.FC = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Set unstable_enablePackageExports: true to see the error</Text>

            <WarningModal
                title={''}
                body={''}
                isVisible={false}
            />
        </View>
    );
};

export default SelectRepairTypeComponent;
