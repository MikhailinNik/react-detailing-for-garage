import styles from './FirstScreen.module.scss';
import Navigation from '../../components/navigation/Navigation';
import HeaderContent from '../../components/headerContent/HeaderContent';

export default function FirstScreen() {
	return (
		<div className={styles.root} id="header">
			<Navigation />
			<HeaderContent />
		</div>
	);
}
