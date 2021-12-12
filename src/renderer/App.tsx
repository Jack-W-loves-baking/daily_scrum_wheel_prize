import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Scrum } from './scrum/components/Scrum';
import { initialValues } from './scrum/constants/InitialValues';
import { ContextProvider } from './scrum/hooks/useContext';

export default function App() {
  return (
    <Router>
      <Switch>
        <ContextProvider initialValues={initialValues}>
          <Route path="/" component={Scrum} />
        </ContextProvider>
      </Switch>
    </Router>
  );
}
