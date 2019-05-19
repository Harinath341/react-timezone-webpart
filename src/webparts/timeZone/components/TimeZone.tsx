import * as React from "react";
import styles from "./TimeZone.module.scss";
import { ITimeZoneProps } from "./ITimeZoneProps";
import { escape } from "@microsoft/sp-lodash-subset";

export default class TimeZone extends React.Component<ITimeZoneProps, {}> {
  public render(): React.ReactElement<ITimeZoneProps> {
    return (
      <div className={styles.timeZone}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Welcome to SharePoint!</span>
              <p className={styles.subTitle}>An SPFx Timezone display.</p>
              <p className={styles.description}>
                {escape(this.props.description)}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
