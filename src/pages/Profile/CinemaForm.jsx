import { Form, message, Modal } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddCinema, UpdateCinema } from "../../apicalls/cinemas";
import Button from "../../components/Button";
import { HideLoading, ShowLoading } from "../../redux/loadersSlice";

function CinemaForm({
  showCinemaFormModal,
  setShowCinemaFormModal,
  formType,
  setFormType,
  selectedCinema,
  setSelectedCinema,
  getData,
}) {
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    values.owner = user._id;
    try {
      dispatch(ShowLoading());
      let response = null;
      if (formType === "add") {
        response = await AddCinema(values);
      } else {
        values.cinemaId = selectedCinema._id;
        response = await UpdateCinema(values);
      }

      if (response.success) {
        message.success(response.message);
        setShowCinemaFormModal(false);
        setSelectedCinema(null);
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

  const selectedCinemaData = {
    name: selectedCinema?.name || "",
    address: selectedCinema?.address || "",
    phone: selectedCinema?.phone  || "",
    email: selectedCinema?.email  || "",
  };

  return (
    <Modal
      title={formType === "add" ? "Add Cinema" : "Edit Cinema"}
      open={showCinemaFormModal}
      onCancel={() => {
        setShowCinemaFormModal(false);
        setSelectedCinema(null);
      }}
      footer={null}
    >
      <Form
        layout="vertical"
        onFinish={onFinish}
        initialValues={selectedCinemaData}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input cinema name!" }]}
        >
          <input type="text" />
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: "Please input cinema address!" }]}
        >
          <textarea type="text" />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phone"
          rules={[
            { required: true, message: "Please input cinema phone number!" },
          ]}
        >
          <input type="text" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input cinema email!" }]}
        >
          <input type="text" />
        </Form.Item>
        <div className="flex justify-end gap-1">
          <Button
            title="Cancel"
            variant="outlined"
            type="button"
            onClick={() => {
              setShowCinemaFormModal(false);
              setSelectedCinema(null);
            }}
          />
          <Button title="Save" type="submit" />
        </div>
      </Form>
    </Modal>
  );
}

export default CinemaForm;
