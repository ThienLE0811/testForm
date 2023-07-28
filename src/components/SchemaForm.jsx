import { FilterOutlined } from "@ant-design/icons";
import {
  BetaSchemaForm,
  FooterToolbar,
  ProColumns,
  ProFormColumnsType,
} from "@ant-design/pro-components";
import { Button, Col, Row } from "antd";
import React from "react";

// interface SchemaFormProps {
//   onSubmit?: (values: Record<string, unknown>) => void;
//   onReset: () => void;
//   columns?: ProColumns<ProFormColumnsType>[];
// }

const SchemaForm = (props) => {
  console.log("Column: ", props?.columns);
  const { columns, onSubmit, onReset } = props;
  return (
    <BetaSchemaForm
      shouldUpdate={false}
      layoutType={"Form"}
      // wrapperCol={{ span: 24 }}
      onFinish={async (values) => onSubmit?.(values)}
      submitter={{
        searchConfig: {
          submitText: "Xác nhận",
        },

        resetButtonProps: false,
        render: (_, dom) => {
          return (
            <FooterToolbar
              portalDom={false}
              style={{ width: 378, paddingInline: 12 }}
            >
              <Row gutter={[12, 12]}>
                <Col></Col>
                <Col>{dom}</Col>
              </Row>
            </FooterToolbar>
          );
        },
      }}
      size="middle"
      // colProps={{
      //   span: 24,
      // }}
      columns={columns}
    />
  );
};

export default SchemaForm;
