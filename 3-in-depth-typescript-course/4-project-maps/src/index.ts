import { Company } from "./classes/Company";
import { GoogleMap } from "./classes/GoogleMap";
import { User } from "./classes/User";

const user = new User();
const company = new Company();
const googleMap = new GoogleMap('map');

googleMap.addMarker(user);
googleMap.addMarker(company);