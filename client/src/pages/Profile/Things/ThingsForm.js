import { Modal, Tabs, Form, Input, Col, Row, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { AddThing, EditThing } from "../../../apicalls/things";
import { SetLoader } from "../../../redux/loadersSlice";
import Images from "./Images";

// const additionalthings = [
//   {
//     label: "Bill Available",
//     name: "billAvailable",
//   },
//   {
//     label: "Warranty Available",
//     name: "warrantyAvailable",
//   },
//   {
//     label: "Accessories Available",
//     name: "accessoriesAvailable",
//   },
//   {
//     label: "Box Available",
//     name: "boxAvailable",
//   },
// ];

const rules = [
  {
    required: true,
    message: "Required",
  },
];
// All the data is repopulated from get data function
function ThingsForm({
  showThingForm,
  setShowThingForm,
  selectedThing,
  getData,
}) {
  const [selectedTab = "1", setSelectedTab] = React.useState("1");
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
  const onFinish = async (values) => {
    try {
      dispatch(SetLoader(true));
      let response = null;
      if (selectedThing) {
        response = await EditThing(selectedThing._id, values);
      } else {
        values.seller = user._id;
        values.status = "pending";
        response = await AddThing(values);
      }
      dispatch(SetLoader(false));
      if (response.success) {
        message.success(response.message);
        getData();
        setShowThingForm(false);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(SetLoader(false));
      message.error(error.message);
    }
  };

  const formRef = React.useRef(null);

  useEffect(() => {
    if (selectedThing) {
      formRef.current.setFieldsValue(selectedThing);
    }
  }, [selectedThing]);
  return (
    <Modal
      title=""
      open={showThingForm}
      onCancel={() => setShowThingForm(false)}
      centered
      width={1000}
      okText="Save"
      onOk={() => {
        formRef.current.submit();
      }}
      {...(selectedTab === "2" && { footer: false })}
    >
      <div>
        <h1 className="text-a text-2xl text-center font-semibold uppercase">
          {selectedThing ? "Edit Thing" : "Add Thing"}
        </h1>
        <Tabs
          defaultActiveKey="1"
          activeKey={selectedTab}
          onChange={(key) => setSelectedTab(key)}
        >
          <Tabs.TabPane tab="General" key="1">
            <Form layout="vertical" ref={formRef} onFinish={onFinish}>
              <Form.Item label="Name" name="name" rules={rules}>
                <Input type="text" />
              </Form.Item>
              <Form.Item label="Description" name="description" rules={rules}>
                <TextArea type="text" />
              </Form.Item>

              <Row gutter={[16, 16]}>
                {/* <Col span={8}>
                  <Form.Item label="Price" name="price" rules={rules}>
                    <Input type="number"></Input>
                  </Form.Item>
                </Col> */}

                <Col span={8}>
                  <Form.Item label="Category" name="category" rules={rules}>
                    <select>
                      <option value="">Select</option>
                      <option value="lost">Lost</option>
                      <option value="found">Found</option>
                      {/* <option value="home">Home</option>
                      <option value="sports">Sports</option> */}
                    </select>
                  </Form.Item>
                </Col>

                {/* <Col span={8}>
                  <Form.Item label="Age" name="age" rules={rules}>
                    <Input type="number" />
                  </Form.Item>
                </Col> */}
              </Row>

              {/* <div className="flex gap-10">
                {additionalthings.map((item) => {
                  return (
                    <Form.Item
                      label={item.label}
                      name={item.name}
                      valuePropName="checked"
                    >
                      <Input
                        type="checkbox"
                        value={item.name}
                        onChange={(e) => {
                          formRef.current.setFieldsValue({
                            [item.name]: e.target.checked,
                          });
                        }}
                        checked={formRef.current?.getFieldValue(item.name)}
                      />
                    </Form.Item>
                  );
                })}
              </div> */}
            </Form>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Images" key="2" disabled={!selectedThing}>
            <Images
              selectedThing={selectedThing}
              getData={getData}
              setShowThingForm={setShowThingForm}
            />
          </Tabs.TabPane>
        </Tabs>
      </div>
    </Modal>
  );
}

export default ThingsForm;
