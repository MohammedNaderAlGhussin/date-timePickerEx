import React from "react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import {
  Datepicker,
  Input,
  Page,
  setOptions,
  localeAr,
} from "@mobiscroll/react";

setOptions({
  locale: localeAr,
  theme: "ios",
  themeVariant: "dark",
});

function App() {
  const [start, startRef] = React.useState(null);
  const [end, endRef] = React.useState(null);

  return (
    <Page>
      <Datepicker
        controls={["calendar", "time"]}
        select="range"
        display="inline"
        touchUi={false}
      />

      <Datepicker
        controls={["calendar", "timegrid"]}
        select="range"
        display="inline"
      />

      <Datepicker controls={["datetime"]} select="range" display="inline" />

      <Datepicker
        controls={["calendar", "time"]}
        select="range"
        inputProps={{
          label: "اختر الموعد",
          labelStyle: "stacked",
          inputStyle: "outline",
          placeholder: "Please Select...",
        }}
      />

      <Datepicker
        controls={["datetime"]}
        select="range"
        startInput={start}
        endInput={end}
      />

      <div className="mbsc-grid mbsc-no-padding">
        <div className="mbsc-row">
          <div className="mbsc-col-6">
            <Input
              ref={startRef}
              label="Start"
              labelStyle="stacked"
              inputStyle="outline"
              placeholder="Please Select..."
            ></Input>
          </div>
          <div className="mbsc-col-6">
            <Input
              ref={endRef}
              label="End"
              labelStyle="stacked"
              inputStyle="outline"
              placeholder="Please Select..."
            ></Input>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default App;
