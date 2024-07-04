// LIBRARIES
import { getLocalTimeZone, parseDate, today } from "@internationalized/date";
import { Button, DateRangePicker, RangeValue, Select, SelectItem } from "@nextui-org/react";
import { Field, FieldProps, Form, Formik } from "formik";

// Swiper
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

// STYLES
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/swiper-bundle.css";

// TYPES
import { ITravelDates, PromosFormValues } from "@/app/types/types";

// DATA
import { countries } from "@/app/data/countries";
import { passengers } from "@/app/data/passengers";

// Define the initial values
const initialValues: PromosFormValues = {
  travelDates: {
    start: today(getLocalTimeZone()),
    end: parseDate("2024-04-08"),
  },
  departure: null,
  arrival: null,
  passengers: null,
};

// Started
function PromoFormDateRangePicker({ field, form }: FieldProps<RangeValue<ITravelDates>>) {
  return (
    <DateRangePicker
      size="sm"
      className="xl:w-2/6 w-full"
      label="Choose dates"
      visibleMonths={2}
      pageBehavior="single"
      minValue={today(getLocalTimeZone())}
      defaultValue={{
        start: today(getLocalTimeZone()).add({ days: 1 }),
        end: today(getLocalTimeZone()).add({ days: 4 }),
      }}
      onChange={(value) => form.setFieldValue(field.name, value)}
      isRequired
    />
  );
}

function HeroSectionForm() {
  return (
    <>
      <div className="">
        <h5 className="text-xl text-primary font-black">Search & Go</h5>
        <hr />
      </div>

      <div className="my-5">
        <div>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                //   alert(JSON.stringify(values, null, 2));
                //   setSubmitting(false);

                const formData = {
                  travelDates: values.travelDates,
                  departure: values.departure ? countries[Number(values.departure)].value : null,
                  arrival: values.arrival ? countries[Number(values.arrival)].value : null,
                  passengers: values.passengers,
                };

                console.log({ values, formData });
              }, 500);
            }}
          >
            {({ setFieldValue, values, isSubmitting }) => (
              <Form className="flex xl:flex-row flex-col gap-2">
                <Field name="travelDates" component={PromoFormDateRangePicker} />

                <div className="flex flex-row gap-2 xl:w-2/6 lg:w-full">
                  <Field name="departure">
                    {({ field }: { field: { departure: string } }) => (
                      <Select
                        size={"sm"}
                        label="Departure"
                        className="xl:w-1/2 lg:w-1/2"
                        onChange={(departure) => setFieldValue("departure", departure)}
                        isRequired
                        {...field}
                      >
                        {countries.map((country, key) => (
                          <SelectItem key={key} value={country.value}>
                            {country.name}
                          </SelectItem>
                        ))}
                      </Select>
                    )}
                  </Field>

                  <Field name="arrival">
                    {({ field }) => (
                      <Select
                        size={"sm"}
                        label="Arrival"
                        className="xl:w-1/2 lg:w-1/2"
                        onChange={(arrival) => setFieldValue("arrival", arrival)}
                        isRequired
                        {...field}
                      >
                        {countries.map((country, key) => (
                          <SelectItem key={key} value={country.value}>
                            {country.name}
                          </SelectItem>
                        ))}
                      </Select>
                    )}
                  </Field>
                </div>

                <Field name="passengers">
                  {({ field }) => (
                    <Select
                      size={"sm"}
                      label="Passengers"
                      className="xl:w-1/6 lg:w-full"
                      {...field}
                      isRequired
                    >
                      {passengers.map((passanger, key) => (
                        <SelectItem key={key} value={passanger.value}>
                          {passanger.name}
                        </SelectItem>
                      ))}
                    </Select>
                  )}
                </Field>

                <Button
                  type="submit"
                  color="primary"
                  className="xl:w-1/6 rounded-md text-white"
                  size="lg"
                  disabled={isSubmitting}
                >
                  Search
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default HeroSectionForm;
