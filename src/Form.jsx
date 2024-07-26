// import FormOutline from "./ui/FormOutline";
// import FormRow from "./ui/FormRow";
// import Input from "./ui/Input";
// import Button from "./ui/Button";
// import Textarea from "./ui/TextArea";

function Form() {
  return <h1>H</h1>;
}

export default Form;

{
  /* <FormOutline>
      <FormRow label="Cabin name">
        <Input type="text" id="name" />
      </FormRow>

      <FormRow label="Maximum capacity">
        <Input
          type="number"
          id="maxCapacity"
          // {...register("maxCapacity", {
          //   required: "This field is required",
          //   min: {
          //     value: 1,
          //     message: "Capacity should be at least 1",
          //   },
          // })}
        />
      </FormRow>

      <FormRow label="Regular price">
        <Input type="number" id="regularPrice" />
      </FormRow>

      <FormRow label="Discount">
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          // {...register("discount", {
          //   required: "This field is required",
          //   validate: (value) =>
          //     value <= getValues().regularPrice ||
          //     "Discount should be less than regular price",
          // })}
        />
      </FormRow>

      <FormRow
        label="Description for website"
        // error={errors?.description?.message}
      >
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          // {...register("description", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Cabin photo">
        {/* <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : "This field is required",
          })}
        /> */
}
//   </FormRow>

//   <FormRow>
//     {/* type is an HTML attribute! */}
//     <Button variation="secondary" type="reset">
//       Cancel
//     </Button>
//     <Button>Create</Button>
//   </FormRow>
// </FormOutline> */}
