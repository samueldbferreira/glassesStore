import React from 'react';
import TitleID from '../../sectionTitle/id/TitleID';
import Input from '../../forms/input/Input';
import TextArea from '../../forms/textArea/TextArea';
import SmallButton from '../../forms/smallButton/SmallButton';
import Button from '../../forms/button/Button';
import RadioColor from '../../forms/radioColor/RadioColor';
import checkSVG from '../../../assets/account/check.svg';
import styles from './AdminProduct.module.css';

const AdminProduct = () => {
	const [nome, setNome] = React.useState();
	const [tipo, setTipo] = React.useState('');
	const [images, setImages] = React.useState([]);
	const [nomeCor, setNomeCor] = React.useState('');
	const [hexaCor, setHexaCor] = React.useState('');
	const [cores, setCores] = React.useState([]);
	const [descricao, setDescricao] = React.useState('');
	const [largura, setLargura] = React.useState('');
	const [altura, setAltura] = React.useState('');
	const [haste, setHaste] = React.useState('');
	const [espacoNariz, setEspacoNariz] = React.useState('');
	const [material, setMaterial] = React.useState('');

	function handleSubmit () {
		if (!nome || !tipo || !images || !cores || !descricao || !largura || !altura || !haste || !espacoNariz || !material) return;
	}

	return (
			<section>
					<TitleID title={'Editar Produto'} />

					<form className={styles.form} onSubmit={handleSubmit}>
						<div className={styles.grid}>
							<div>
								<div className={styles.dataSection}>
									<h2 className={styles.sectionTitle}>DADOS BÁSICOS</h2>

									<div className={styles.inputs}>
										<Input
											label='Nome'
											type='text'
											id='nome'
											value={nome}
											setValue={setNome}
										/>

										<Input
											label='Tipo'
											type='text'
											id='tipo'
											value={tipo}
											setValue={setTipo}
										/>
									</div>
								</div>

								<form className={styles.dataSection}>
									<h2 className={styles.sectionTitle}>IMAGENS</h2>

									<input
										type="file"
										name="images"
										id="images"
										multiple
										onChange={(e) => {
											setImages([...e.target.files]);
										}}
									/>

									<div className={styles.submitedImages}>
										{
											images.map((img, i) => {
												return (
													<div className={styles.containerPreview} key={i}>
														<img src={URL.createObjectURL(img)} />
													</div>
												);
											})
										}
									</div>
								</form>

								<form className={styles.dataSection}>
									<h2 className={styles.sectionTitle}>CORES</h2>
									
									<div className={styles.inputs}>
										<Input
											label='Nome da cor'
											type='text'
											id='nomeCor'
											value={nomeCor}
											setValue={setNomeCor}
										/>

										<Input
											label='Hexadecimal da cor'
											type='text'
											id='hexaCor'
											value={hexaCor}
											setValue={setHexaCor}
										/>
									</div>

									<SmallButton
										value='ADICIONAR COR'
										onClick={(e) => {
											e.preventDefault();

											if (!nomeCor || !hexaCor) return;

											setCores([...cores, { nomeCor, hexaCor }]);

											setNomeCor('');
											setHexaCor('');
										}}
									/>

									<ul className={styles.colorsList}>
										{
											cores.map((cor) => {
												return (
													<li key={cor}>
														<RadioColor 
															nomeCor={cor.nomeCor}
															cor={cor.hexaCor}
														/> 
													</li>
												);
											})
										}
									</ul>
								</form>
							</div>
							
							<div>
								<div className={styles.dataSection}>
									<h2 className={styles.sectionTitle}>SOBRE O PRODUTO</h2>
									
									<div className={styles.inputs}>
										<TextArea
											label="Descrição"
											id="descricao"
											cols="30"
											rows="10"
											value={descricao}
											setValue={setDescricao}
										/>
									</div>
								</div>

								<div className={styles.dataSection}>
									<h2 className={styles.sectionTitle}>ESPECIFICAÇÕES TÉCNICAS</h2>
									
									<div className={styles.inputs}>
										<Input
											label='Largura'
											type='text'
											id='largura'
											value={largura}
											setValue={setLargura}
										/>

										<Input
											label='altura'
											type='text'
											id='altura'
											value={altura}
											setValue={setAltura}
										/>

										<Input
											label='haste'
											type='text'
											id='haste'
											value={haste}
											setValue={setHaste}
										/>

										<Input
											label='Espaço Nariz'
											type='text'
											id='espacoNariz'
											value={espacoNariz}
											setValue={setEspacoNariz}
										/>

										<Input
											label='Material'
											type='text'
											id='material'
											value={material}
											setValue={setMaterial}
										/>
									</div>
								</div>
							</div>
						</div>
						
						<div className={styles.containerButton}>
							<Button 
								value="ADICIONAR PRODUTO"
								icon={checkSVG}
								color='red'
							/>
						</div>
					</form>
			</section>
	);
}

export default AdminProduct;
