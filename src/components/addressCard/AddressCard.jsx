import { DELETE_ADDRESS } from "../../services/Api";
import editSVG from "../../assets/account/edit_square.svg";
import deleteSVG from "../../assets/account/delete.svg";
import styles from "./AddressCard.module.css";

const AddressCard = ({ data, setModalAddress, controls, setAddresses }) => {
	async function handleDelete() {
		const { url, options } = DELETE_ADDRESS(data._id);

		if (window.confirm("Deseja realmente excluir este endereço?")) {
			const response = await fetch(url, options);
			const json = await response.json("");

			setAddresses((addresses) => addresses.filter((a) => a._id != data._id));

			window.alert(json.msg);
		}
	}

	return (
		<div className={styles.address}>
			<h3 className={styles.titulo}>{data.name}</h3>

			<span className={styles.info}>
				<p>
					{data.street}, {data.number}
					{data.complement && `, ${data.complement}`}
				</p>
				<p>
					{data.district} - {data.city} - {data.state}
				</p>
				<p>CEP: {data.cep}</p>
				{data.complement && <p>{data.complement}</p>}
			</span>

			{controls && (
				<>
					<hr className={styles.separator} />
					<span className={styles.controls}>
						<a
							className={styles.change}
							onClick={() => {
								setModalAddress(data);
							}}
						>
							<p>Alterar</p>
							<img src={editSVG} />
						</a>

						<a className={styles.change} onClick={handleDelete}>
							<p>Excluir</p>
							<img src={deleteSVG} />
						</a>
					</span>
				</>
			)}
		</div>
	);
};

export default AddressCard;
