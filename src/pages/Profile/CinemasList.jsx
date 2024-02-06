import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import CinemaForm from "./CinemaForm";
import {
  DeleteCinema,
  GetAllCinemas,
  GetAllCinemasByOwner,
} from "../../apicalls/cinemas";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/loadersSlice";
import { message, Table } from "antd";
import Shows from "./Shows";

function CinemasList() {
  const { user } = useSelector((state) => state.users);
  const [showCinemaFormModal, setShowCinemaFormModal] =
    useState(false);
  const [selectedCinema, setSelectedCinema] = useState(null);
  const [formType, setFormType] = useState("add");
  const [cinemas, setCinemas] = useState([]);

  const [openShowsModal, setOpenShowsModal] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await GetAllCinemasByOwner({
        owner: user._id,
      });
      if (response.success) {
        const data = response.data.map((cinema) => {
          return {
            ...cinema,
            key: cinema._id,
          };
        });
        setCinemas(data);
      } else {
        message.error(response.message);
      }
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      dispatch(ShowLoading());
      const response = await DeleteCinema({ cinemaId: id });
      if (response.success) {
        message.success(response.message);
        getData();
      } else {
        message.error(response.message);
      }
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Status",
      dataIndex: "isActive",
      render: (text, record) => {
        if (text) {
          return "Approved";
        } else {
          return "Pending / Blocked";
        }
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => {
        return (
          <div className="flex gap-1 items-center">
            <i
              className="ri-delete-bin-line"
              onClick={() => {
                handleDelete(record._id);
              }}
            ></i>
            <i
              className="ri-pencil-line"
              onClick={() => {
                setFormType("edit");
                setSelectedCinema(record);
                setShowCinemaFormModal(true);
              }}
            ></i>

            {record.isActive && (
              <span
                className="underline"
                onClick={() => {
                  setSelectedCinema(record);
                  setOpenShowsModal(true);
                }}
              >
                Shows
              </span>
            )}
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="flex justify-end mb-1">
        <Button
          variant="outlined"
          title="Add Cinema"
          onClick={() => {
            setFormType("add");
            setShowCinemaFormModal(true);
          }}
        />
      </div>

      <Table columns={columns} dataSource={cinemas} />

      {showCinemaFormModal && (
        <CinemaForm
          showCinemaFormModal={showCinemaFormModal}
          setShowCinemaFormModal={setShowCinemaFormModal}
          formType={formType}
          setFormType={setFormType}
          selectedCinema={selectedCinema}
          setSelectedCinema={setSelectedCinema}
          getData={getData}
        />
      )}

      {openShowsModal && (
        <Shows
          openShowsModal={openShowsModal}
          setOpenShowsModal={setOpenShowsModal}
          cinema={selectedCinema}
        />
      )}
    </div>
  );
}

export default CinemasList;
