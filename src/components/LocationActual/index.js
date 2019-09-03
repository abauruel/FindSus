import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LocationActual = () => {
  <View>
    <TouchableOpacity onPress={this.getCurrentPosition}>
      <Icon name="child" size={32} color="#ddd" style={{ marginLeft: 30 }} />
    </TouchableOpacity>
  </View>;
};

export default LocationActual;
