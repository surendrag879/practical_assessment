import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { userAvatar, userList } from './Json';

const column = [
    {
        selector: (row) => {
            return (
                <div className="tableRow">
                    <img src={row.avatar} alt="img not found" />
                    <sup> <span>{row.first_name} {row.last_name}</span></sup>
                </div>
            )
        }
    },
];
const conditionalRowStyles = [
    {
        when: row => row.toggleSelected,
        style: {
            backgroundColor: "#DAF7A6",
            userSelect: "none"
        }
    }
];

const UserTable = () => {
    const [search, setSearch] = useState('')
    const [dataSource, setDataSource] = useState([])
    const [filterUser, setFilterUser] = useState([])
    const [selectRow, setSelectRow] = useState([])

    async function funFilterObject(userlist, useravatar) {
        let Data = await userlist.map((obj) => {
            let index = useravatar.findIndex((element) => element['id'] === obj['id']);
            return index !== -1 ? { ...obj, ...useravatar[index] } : {}
        });
        setDataSource(Data);
        setFilterUser(Data);
    }

    const handleRowClicked = row => {
        const updatedData = filterUser.map(item => {
            if (row.id !== item.id) {
                return item;
            }

            return {
                ...item,
                toggleSelected: !item.toggleSelected
            };
        });

        const selected = updatedData.filter((d) => d.toggleSelected)
        // console.log(selected)
        setSelectRow(selected)
        setFilterUser(updatedData);
    };

    useEffect(() => {
        funFilterObject(userList, userAvatar);
    }, [])

    useEffect(() => {
        const result = dataSource.filter(user => {
            return (user.first_name.toLowerCase().match(search.toLowerCase()));
        })
        setFilterUser(result)
    }, [search])

    return (
        <>
            <div className='container-fluid'>
                <DataTable
                    title="SELECT USERS"
                    actions={<button className="btn btn-primary">x</button>}
                    subHeader
                    subHeaderComponent={
                        <input
                            type="text"
                            placeholder="Search..."
                            style={{ width: "30%", height: '40px', outline: 'none' }}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    }
                    columns={column}
                    data={filterUser}
                    fixedHeader
                    fixedHeaderScrollHeight="410px"
                    highlightOnHover
                    onRowClicked={handleRowClicked}
                    conditionalRowStyles={conditionalRowStyles}
                    pagination
                />
                <div className="header-btn">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#openModal">
                        Select
                    </button>
                </div>
            </div>
            <div className="modal fade" id="openModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable modal-fullscreen">
                    <div className="modal-content">
                        {/* <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Selected Users</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div> */}
                        <div className="modal-body">
                            <DataTable
                                title="Selected Users"
                                columns={column}
                                data={selectRow}
                                actions={<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />}

                            />
                            {/* <ul>
                                {selectRow?.length ? (
                                    selectRow.map((item, index) => {
                                        return <li key={index}>
                                            <img src={item.avatar} alt="img not found" />
                                            {item.first_name}
                                            {item.last_name}
                                        </li>
                                    })

                                ) : (
                                    <p>No select users</p>
                                )}
                            </ul> */}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Back</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserTable;
