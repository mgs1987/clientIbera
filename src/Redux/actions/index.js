import * as hotelsActions from "./hotels";
import * as servicesActions from "./services";

const allActions = { ...hotelsActions, ...servicesActions };

export default allActions;
