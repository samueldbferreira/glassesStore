import React from "react";
import { PATCH_PRODUCT, DELETE_PRODUCT } from "../../../services/Api";
import TitleID from "../../../components/titleID/TitleID";
import Input from "../../../components/input/Input";
import TextArea from "../../../components/textArea/TextArea";
import SmallButton from "../../../components/smallButton/SmallButton";
import Button from "../../../components/button/Button";
import RadioColor from "../../../components/radioColor/RadioColor";
import checkSVG from "../../../assets/account/check.svg";
import styles from "./ProductAdmin.module.css";
import { useNavigate } from "react-router-dom";

const ProductAdmin = ({ data }) => {
	const navigate = useNavigate();
	const [nome, setNome] = React.useState(data.name);
	const [categoria, setCategoria] = React.useState(data.category);
	const [estoque, setEstoque] = React.useState(data.stock);
	const [preco, setPreco] = React.useState(data.price);
	const [parcelas, setParcelas] = React.useState(data.installments.toString());
	const [images, setImages] = React.useState([]);
	const [nomeCor, setNomeCor] = React.useState("");
	const [hexaCor, setHexaCor] = React.useState("");
	const [cores, setCores] = React.useState(data.colors);
	const [descricao, setDescricao] = React.useState(data.description);
	const [largura, setLargura] = React.useState(data.width);
	const [altura, setAltura] = React.useState(data.height);
	const [haste, setHaste] = React.useState(data.stem);
	const [espacoNariz, setEspacoNariz] = React.useState(data.noseSpace);
	const [material, setMaterial] = React.useState(data.material);

	async function handleSubmit(e) {
		e.preventDefault();

		if (
			!nome ||
			!categoria ||
			!estoque ||
			!preco ||
			!parcelas ||
			!images ||
			!cores ||
			!descricao ||
			!largura ||
			!altura ||
			!haste ||
			!espacoNariz ||
			!material
		) {
			return window.alert("Preencha todos os dados necessários.");
		}

		const formData = new FormData();
		formData.append("name", nome);
		formData.append("category", categoria);
		formData.append("stock", Number(estoque));
		formData.append("price", Number(preco));
		formData.append("installments", Number(parcelas));
		formData.append("images", images);
		formData.append("colors", JSON.stringify(cores));
		formData.append("description", descricao);
		formData.append("width", largura);
		formData.append("height", altura);
		formData.append("stem", haste);
		formData.append("noseSpace", espacoNariz);
		formData.append("material", material);

		const { url, options } = PATCH_PRODUCT(data._id, formData);

		const response = await fetch(url, options);
		const json = await response.json();

		window.alert(json.msg);

		if (response.ok) navigate("/produtos");
	}

	async function handleDelete(e) {
		e.preventDefault();

		if (window.confirm("Deseja realmente exluir o produto?")) {
			const { url, options } = DELETE_PRODUCT(data._id);

			const response = await fetch(url, options);
			const json = await response.json();

			window.alert(json.msg);

			if (response.ok) navigate("/produtos");
		}
	}

	return (
		<section>
			<TitleID title={"Editar produto"} />

			<form className={styles.form} onSubmit={handleSubmit}>
				<div className={styles.grid}>
					<div>
						<div className={styles.dataSection}>
							<h2 className={styles.sectionTitle}>DADOS BÁSICOS</h2>

							<div className={styles.inputs}>
								<Input
									label="Nome"
									type="text"
									id="nome"
									value={nome}
									setValue={setNome}
								/>

								<Input
									label="Tipo"
									type="text"
									id="tipo"
									value={categoria}
									setValue={setCategoria}
								/>

								<Input
									label="Estoque"
									type="text"
									id="estoque"
									value={estoque}
									setValue={setEstoque}
								/>
							</div>
						</div>

						<div className={styles.dataSection}>
							<h2 className={styles.sectionTitle}>VALORES</h2>

							<div className={styles.inputs}>
								<Input
									label="Preço"
									type="number"
									id="preco"
									value={preco}
									setValue={setPreco}
								/>

								<Input
									label="Parcelas"
									type="number"
									id="parcelas"
									value={parcelas}
									setValue={setParcelas}
								/>
							</div>
						</div>

						<div className={styles.dataSection}>
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
								{images.map((img, i) => {
									return (
										<div className={styles.containerPreview} key={i}>
											<img src={URL.createObjectURL(img)} />
										</div>
									);
								})}
							</div>
						</div>

						<div className={styles.dataSection}>
							<h2 className={styles.sectionTitle}>CORES</h2>

							<div className={styles.inputs}>
								<Input
									label="Nome da cor"
									type="text"
									id="nomeCor"
									value={nomeCor}
									setValue={setNomeCor}
								/>

								<Input
									label="Hexadecimal da cor"
									type="text"
									id="hexaCor"
									value={hexaCor}
									setValue={setHexaCor}
								/>
							</div>

							<SmallButton
								value="ADICIONAR COR"
								onClick={(e) => {
									e.preventDefault();

									if (!nomeCor || !hexaCor) return;

									setCores([...cores, { nome: nomeCor, hexa: hexaCor }]);

									setNomeCor("");
									setHexaCor("");
								}}
							/>

							<div className={styles.colorsList}>
								<RadioColor colors={cores} />
							</div>
						</div>
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
									label="Largura"
									type="text"
									id="largura"
									value={largura}
									setValue={setLargura}
								/>

								<Input
									label="altura"
									type="text"
									id="altura"
									value={altura}
									setValue={setAltura}
								/>

								<Input
									label="haste"
									type="text"
									id="haste"
									value={haste}
									setValue={setHaste}
								/>

								<Input
									label="Espaço Nariz"
									type="text"
									id="espacoNariz"
									value={espacoNariz}
									setValue={setEspacoNariz}
								/>

								<Input
									label="Material"
									type="text"
									id="material"
									value={material}
									setValue={setMaterial}
								/>
							</div>
						</div>

						<a className={styles.remove} onClick={handleDelete}>
							<p>REMOVER</p>
						</a>
					</div>
				</div>

				<div className={styles.containerButton}>
					<Button value="ADICIONAR PRODUTO" icon={checkSVG} color="red" />
				</div>
			</form>
		</section>
	);
};

export default ProductAdmin;
