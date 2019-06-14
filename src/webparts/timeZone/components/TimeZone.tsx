import * as React from 'react';
import styles from './TimeZone.module.scss';
import { ITimeZoneProps } from './ITimeZoneProps';
import Clock from 'react-live-clock';

const curr_timedate = new Date();

export default class TimeZone extends React.Component<ITimeZoneProps, {}> {
	public render(): React.ReactElement<ITimeZoneProps> {
		return (
			<div className={styles.timeZone}>
				<div className={styles.container}>
					<div>
						<Clock format={'HH:mm:ss'} ticking={true} />
					</div>
					<div>
						<Clock format={'HH:mm:ss'} ticking={true} timezone={'America/Chicago'} />
					</div>
				</div>
			</div>
		);
	}
}
