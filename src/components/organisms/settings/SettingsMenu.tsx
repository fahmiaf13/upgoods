import TextInput from "../../atoms/TextInput";

interface Props {
  data: Data;
}

type Data = {
  photoURL: string;
  displayName: string;
};

const SettingsMenu = (props: Props) => {
  const { data } = props;

  return (
    <section className="h-screen flex justify-center items-center">
      <div className="w-1/3 flex flex-col items-center bg-white rounded-xl p-5">
        <div className="font-extrabold text-2xl text-sun">Settings</div>
        <img src={data.photoURL} alt="" className="rounded-full" />
        <div className="font-extrabold text-xl">{data.displayName}</div>
        {/* <TextInput /> */}
      </div>
    </section>
  );
};

export default SettingsMenu;
