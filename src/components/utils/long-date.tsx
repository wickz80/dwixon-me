import * as React from "react"

interface DateProps {
  date: string
}

const LongDate: React.FunctionComponent<DateProps> = (props) => (
  <h6
    style={{
      paddingLeft: "10px"
    }}
  >
    {new Date(props.date).toLocaleDateString(
      "en-US",
      {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }
    )}
  </h6>
)

export default LongDate
