import React from 'react';
import ListIcon from '../../components/listIcon/listIcon';

import buttonIcon from '../../assets/first-screen/button.png';
import instagramIcon from '../../assets/footer/instagramIcon.png';
import vkIcon from '../../assets/footer/vkIcon.png';
import giscon from '../../assets/footer/2gis.png';
import markIcon from '../../assets/footer/markIcon.png';
// import mailIcon from '../../assets/footer/mailIcon.png';
import telIcon from '../../assets/footer/telIcon.png';

const Footer = () => {
	return (
		<div className="footer" id="contacts">
			<div className="footer_header">
				<h1>Ответим на любой вопрос</h1>
				<ListIcon />
			</div>
			<form className="footer_form">
				<div className="footer_inputs">
					<input type="text" placeholder="ИМЯ" />
					<input type="text" placeholder="Телефон" />
				</div>
				<div className="footer_textarea">
					<textarea type="text" placeholder="Вопрос по дизайну, тюнингу и др." maxLength="350" />
					<div className="footer_textarea--icons">
						<div>
							<a href="https://www.instagram.com/garage_detailing11/?igshid=19td5msfp0ql5">
								<img src={instagramIcon} alt="Instagram" width={20} height={20} />
							</a>
						</div>
						<div>
							<a href="https://vk.com/garage_detailing11">
								<img src={vkIcon} width={20} height={12} alt="VKontakte" />
							</a>
						</div>
						<div>
							<a href="https://2gis.ru/syktyvkar/firm/70000001037420561">
								<img src={giscon} width={20} height={20} alt="TwoGis" />
							</a>
						</div>
					</div>
				</div>
				<div className="footer_submit">
					<button type="submit" className="button">
						<label>
							<img src={buttonIcon} width={110} height={61} />
							<span>Отправить</span>
						</label>
					</button>
					<div className="icons">
						<div>
							<a href="https://2gis.ru/syktyvkar/firm/70000001037420561">
								<img src={markIcon} alt="Mark" />
								<p>ул. Гаражная, 3/2, Сыктывкар, Респ. Коми, Россия, 167000</p>
							</a>
						</div>
						<div className="icons_otherIcon">
							<a href="">
								<img src={telIcon} alt="Telephone" />
								<p>+7 (912) 866-57-77</p>
							</a>
						</div>
					</div>
				</div>
			</form>
			<div className="footer_end">
				<h3>
					2022 © Est et viverra pellentesque pharetra lorem proin in. Vitae magna at tempus commodo.
				</h3>

				<ul>
					<li>Главная</li>
					<li>Оклейка автомобилей</li>
					<li>Детейлинг автомобилей</li>
					<li>Галерея работ</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
