import styles from './FirstScreen.module.scss';
import Navigation from '../../components/navigation/Navigation';
import HeaderContent from '../../components/headerContent/HeaderContent';

export default function FirstScreen() {
	return (
		<div className={styles.root}>
			<Navigation />
			<HeaderContent />
		</div>
	);
}
