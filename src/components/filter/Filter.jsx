import React from "react";
import FilterModal from "./filterModal/FilterModal";
import styles from "./Filter.module.css";
import SortModal from "./sortModal/SortModal";

const Filter = ({ initial, data, setData }) => {
	const [min, setMin] = React.useState("");
	const [max, setMax] = React.useState("");
	const [sortParam, setSortParam] = React.useState("lançamentos");
	const [filterModal, setFilterModal] = React.useState(false);
	const [sortModal, setSortModal] = React.useState(false);

	return (
		<>
			<div className={styles.filterBar}>
				<a className={styles.filter}>
					<p
						onClick={() => {
							setFilterModal(!filterModal);
							setSortModal(false);
						}}
					>
						filtrar
					</p>
					<i className={styles.filterIcon} />
					<div className={styles.filterModal}>
						{filterModal && (
							<FilterModal
								min={min}
								setMin={setMin}
								max={max}
								setMax={setMax}
								initial={initial}
								setData={setData}
								setActive={setFilterModal}
							/>
						)}
					</div>
				</a>

				<p className={styles.quantity}>
					{data.length} {data.length === 1 ? "produto" : "produtos"}
				</p>

				<a
					className={styles.sort}
					onClick={() => {
						setSortModal(!sortModal);
						setFilterModal(false);
					}}
				>
					<p>{sortParam}</p>
					<i className={styles.sortIcon} />
					<div className={styles.sortModal}>
						{sortModal && (
							<SortModal
								setActive={setSortModal}
								options={["lançamentos", "menor preço", "maior preço"]}
								setOption={setSortParam}
								initial={initial}
								setData={setData}
							/>
						)}
					</div>
				</a>
			</div>
		</>
	);
};

export default Filter;
