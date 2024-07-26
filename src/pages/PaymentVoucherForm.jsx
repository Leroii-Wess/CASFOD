import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Form from "../ui/Form";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import Row from "../ui/Row";
import Button from "../ui/Button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "../ui/Select";
import Textarea from "../ui/TextArea";
import { data } from "../dropDownData";

function PaymentVoucherForm() {
  const [menuOption, setMenuOption] = useState("");
  const [chartCode, setChartCode] = useState("");
  const [amount, setAmount] = useState("");

  const [date, setDate] = useState(new Date());
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  // console.log(errors);

  function handleChange(e) {
    const selected = e.target.value;
    setMenuOption(selected);

    const codeObject = data.find((d) => d.position.trim() == selected.trim());
    setChartCode(codeObject.code);
  }

  /////////////////////////////////////////
  function handleAmountChange(e) {
    setAmount(e.target.value);
    console.log("check");
    console.log(e.target.value);
  }

  function formSubmit(data) {
    console.log(data);
  }

  return (
    <Form onSubmit={handleSubmit(formSubmit)}>
      <Row>
        <FormRow
          label="Departmental Code *"
          error={errors?.departmentalCode?.message}
        >
          <Input
            placeholder="code"
            id="departmentalCode"
            {...register("departmentalCode", {
              required: "This field is required",
            })}
          />
        </FormRow>

        <FormRow
          label="PV Number *"
          type="small"
          error={errors?.pvNumber?.message}
        >
          <Input
            placeholder=""
            id="pvNumber"
            {...register("pvNumber", {
              required: "This field is required",
            })}
          />
        </FormRow>
      </Row>

      <Row>
        <FormRow
          label="Paying Station *"
          error={errors?.payingStation?.message}
        >
          <Input
            placeholder=""
            id="payingStation"
            {...register("payingStation", {
              required: "This field is required",
            })}
          />
        </FormRow>

        <FormRow label="Month/Year" type="small">
          <DatePicker
            id="date"
            onChange={(date) => setDate(date)}
            selected={date}
            dateFormat="dd/MM/yyyy"
            // {...register("date")}
          />
        </FormRow>
      </Row>

      <Row>
        <FormRow label="Pay To *" type="large" error={errors?.payTo?.message}>
          <Input
            placeholder=""
            id="payTo"
            {...register("payTo", {
              required: "This field is required",
              minLength: {
                value: 2,
                message: "Minimum number of characters is 2",
              },
              maxLength: 100,
            })}
          />
        </FormRow>
      </Row>

      <Row>
        <FormRow label="Being *" type="large" error={errors?.being?.message}>
          <Textarea
            placeholder=""
            id="being"
            {...register("being", {
              required: "This field is required",
            })}
          />
        </FormRow>
      </Row>

      <Row>
        <FormRow
          label="Amount in Words *"
          type="large"
          error={errors?.amountInWords?.message}
        >
          <Textarea
            placeholder=""
            id="amountInWords"
            {...register("amountInWords", {
              required: "This field is required",
            })}
          />
        </FormRow>
      </Row>

      <Row>
        <FormRow
          label="Grant Code *"
          type="medium"
          error={errors?.grantCode?.message}
        >
          <Input
            placeholder=""
            id="grantCode"
            {...register("grantCode", {
              required: "This field is required",
            })}
          />
        </FormRow>

        {/* ////////////////////////////////////////////////////////// */}
        <FormRow
          label="Gross Amount (₦) *"
          type="medium"
          error={errors?.grossAmount?.message}
        >
          <Input
            onChange={handleAmountChange}
            placeholder="123..."
            id="grossAmount"
            {...register("grossAmount", {
              required: "This field is required",
            })}
          />
        </FormRow>
      </Row>

      <Row>
        <FormRow label="VAT" type="small">
          <Input
            placeholder=""
            id="vat"
            {...register("vat", { min: 0, max: 100 })}
          />
        </FormRow>
        <FormRow label="WHT" type="small">
          <Input
            placeholder=""
            id="wht"
            {...register("wht", { min: 0, max: 100 })}
          />
        </FormRow>
        <FormRow label="Development Levy" type="small">
          <Input
            placeholder=""
            id="devLevy"
            {...register("devLevy", { min: 0, max: 100 })}
          />
        </FormRow>
      </Row>

      <Row>
        <FormRow label="Other Deductions" type="medium">
          <Input
            placeholder=""
            id="otherDeductions"
            {...register("otherDeductions")}
          />
        </FormRow>
      </Row>

      <Row>
        <FormRow
          label="Net Amount (₦) *"
          type="medium"
          error={errors?.netAmount?.message}
        >
          <Input
            value={amount}
            placeholder=""
            id="netAmount"
            readOnly
            {...register("netAmount")}
          />
        </FormRow>
      </Row>

      <Row>
        <FormRow
          label="Chart of Account *"
          type="medium"
          error={errors?.chartOfAccount?.message}
        >
          {/* <Input
            placeholder=""
            id="chartOfAccount"
            {...register("chartOfAccount", {
              required: "This field is required",
            })}
          /> */}
          <Select
            type="gray"
            options={data}
            value={menuOption}
            onChange={handleChange}
          />
        </FormRow>
        <FormRow
          label="Chart of Acc. Code *"
          type="medium"
          error={errors?.chartOfAccountCode?.message}
        >
          <Input
            value={chartCode}
            placeholder=""
            id="chartOfAccountCode"
            readOnly
            {...register("chartOfAccountCode", {
              required: "This field is required",
            })}
          />
        </FormRow>
      </Row>

      <Row>
        <FormRow label="Proj. Budget Line" type="medium">
          <Input
            placeholder=""
            id="projBudgetLine"
            {...register("projBudgetLine")}
          />
        </FormRow>
        <FormRow label="Note" type="medium">
          <Input placeholder="" id="note" {...register("note")} />
        </FormRow>
      </Row>

      <Row>
        <FormRow label="Mandate Reference" type="medium">
          <Input
            placeholder=""
            id="mandateReference"
            {...register("mandateReference")}
          />
        </FormRow>
      </Row>

      <Row>
        <FormRow
          label="Prepared By *"
          type="medium"
          error={errors?.preparedBy?.message}
        >
          <Input
            placeholder=""
            id="preparedBy"
            {...register("preparedBy", {
              required: "This field is required",
              minLength: 2,
              maxLength: 100,
            })}
          />
        </FormRow>
        <FormRow
          label="Checked By *"
          type="medium"
          error={errors?.checkedBy?.message}
        >
          <Input
            placeholder=""
            id="checkedBy"
            {...register("checkedBy", {
              required: "This field is required",
              minLength: 2,
              maxLength: 100,
            })}
          />
        </FormRow>
      </Row>

      <Button size="medium">Download</Button>
    </Form>
  );
}

export default PaymentVoucherForm;
