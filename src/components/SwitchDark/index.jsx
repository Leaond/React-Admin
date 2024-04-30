import React from "react";
import { Switch } from "antd";

export default function SwitchDark() {
  const onChange = (checked) => {
    console.log("=====>>> ", checked);
  };
  return (
    <Switch
      className="dark"
      // defaultChecked={themeConfig.isDark}
      checkedChildren={<>🌞</>}
      unCheckedChildren={<>🌜</>}
      onChange={onChange}
    />
  );
}
