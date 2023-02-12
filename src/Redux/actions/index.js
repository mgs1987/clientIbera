import * as hotelsActions from "./hotels";
import * as amenitiesActions from "./amenities";

const allActions = { ...hotelsActions, ...amenitiesActions };

export default allActions;
