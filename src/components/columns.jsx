import { ProColumns } from "@ant-design/pro-components";
import { Badge } from "antd";
// import moment from 'moment';

// export const fieldDateRangePropsCustom: any = {
//   format: 'DD/MM/YYYY',
//   ranges: {
//     'Hôm nay': [moment().startOf('d'), moment().endOf('d')],
//     'Hôm qua': [
//       moment().subtract(1, 'd').startOf('d'),
//       moment().subtract(1, 'd').endOf('d'),
//     ],
//     'Tuần này': [moment().startOf('week'), moment().endOf('week')],
//     'Tuần trước': [
//       moment().subtract(1, 'w').startOf('week'),
//       moment().subtract(1, 'w').endOf('week'),
//     ],
//     'Tháng này': [moment().startOf('month'), moment().endOf('month')],
//     'Tháng trước': [
//       moment().subtract(1, 'M').startOf('month'),
//       moment().subtract(1, 'M').endOf('month'),
//     ],
//   },
// };

export const Columns = () => {
  return [
    // {
    //   title: 'user ID',
    //   dataIndex: 'userId',
    // },
    {
      title: "Tiêu đề",
      dataIndex: "name",
      initialValue: "",
      formItemProps: {
        rules: [{ max: 200, message: "Vui lòng không nhập quá 200 ký tự!" }],
      },
    },
    {
      title: "Trạng thái",
      dataIndex: "type",
      valueType: "select",
      initialValue: "PENDING",
      valueEnum: {
        PENDING: { text: <Badge status="default" text="Chờ xác nhận" /> },
        PROCESSING: {
          text: <Badge status="processing" text="Đang tiến hành" />,
        },
        COMPLETE: { text: <Badge status="success" text="Hoàn thành" /> },
        REJECT: { text: <Badge status="error" text="Từ chối" /> },
      },
    },
  ];
};
