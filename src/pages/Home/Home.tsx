import useSettingsStore from "../../store/settingsStore.ts";

export function Home() {
  const settings = useSettingsStore()

  return (
    <div>
      <h1>Hello React: {settings.value.name}</h1>
    </div>
  );
}