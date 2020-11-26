import 'jest-enzyme';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import enableHooks from 'jest-react-hooks-shallow';

enzyme.configure({ adapter: new Adapter() });
enableHooks(jest);