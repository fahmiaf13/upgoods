import { useSelector } from "react-redux";
import Template from "../templates/Template";
import { SettingsMenu } from "../organisms/settings";
type Data = {
  user: String;
  data: String;
};

const Settings = () => {
  const { data } = useSelector((state: any) => state.user);

  return (
    <Template title="Settings">
      <SettingsMenu data={data} />
    </Template>
  );
};

export default Settings;
