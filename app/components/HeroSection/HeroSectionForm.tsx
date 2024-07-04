// LIBRARIES
import { getLocalTimeZone, parseDate, today } from "@internationalized/date";
import { Button, DateRangePicker, RangeValue, Select, SelectItem } from "@nextui-org/react";
import { Field, FieldProps, Form, Formik, FormikFormProps, FormikProps } from "formik";

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
import { IArrival, IDeparture, ITravelDates, PromosFormValues } from "@/app/types/types";

// DATA
import { countries } from "@/app/data/countries";
import { tickets } from "@/app/data/tickets";

// Form initial values
const initialValues: PromosFormValues = {
  travelDates: {
    start: today(getLocalTimeZone()),
    end: parseDate("2024-04-08"),
  },
  departure: null,
  arrival: null,
  tickets: null,
};

// DateRangePicker custom component
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

// DeparturePlace custom component
function PromoFormDeparturePlace({ field, form }: FieldProps<IDeparture>) {
  return (
    <Select
      size={"sm"}
      label="Departure"
      className="xl:w-1/2 lg:w-1/2"
      onChange={(value) => form.setFieldValue(field.name, value)}
      isRequired
    >
      {countries.map((country, key) => (
        <SelectItem key={key} value={country.value}>
          {country.name}
        </SelectItem>
      ))}
    </Select>
  );
}

// ArrivalPlace custom component
function PromoFormArrivalPlace({ field, form }: FieldProps<IArrival>) {
  return (
    <Select
      size={"sm"}
      label="Arrival"
      className="xl:w-1/2 lg:w-1/2"
      onChange={(value) => form.setFieldValue(field.name, value)}
      isRequired
    >
      {countries.map((country, key) => (
        <SelectItem key={key} value={country.value}>
          {country.name}
        </SelectItem>
      ))}
    </Select>
  );
}

// ArrivalPlace custom component
function PromoFormTickets({ field, form }: FieldProps<IArrival>) {
  return (
    <Select
      size={"sm"}
      label="Tickets"
      className="xl:w-1/6 lg:w-full"
      onChange={(value) => form.setFieldValue(field.name, value)}
      isRequired
    >
      {tickets.map((ticket, key) => (
        <SelectItem key={key} value={ticket.value}>
          {ticket.name}
        </SelectItem>
      ))}
    </Select>
  );
}

function HeroSectionForm() {
  const onSubmit = (
    values: PromosFormValues,
    { setSubmitting }: { setSubmitting: FormikFormProps }
  ) => {
    setTimeout(() => {
      //   alert(JSON.stringify(values, null, 2));
      //   setSubmitting(false);

      const formData = {
        travelDates: values.travelDates,
        departure: values.departure ? countries[Number(values.departure)].value : null,
        arrival: values.arrival ? countries[Number(values.arrival)].value : null,
        tickets: values.tickets,
      };

      console.log({ values, formData });
    }, 500);
  };
  return (
    <>
      <div className="">
        <h5 className="text-xl text-primary font-black">Search & Go</h5>
        <hr />
      </div>

      <div className="my-5">
        <div>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ isSubmitting }) => (
              <Form className="flex xl:flex-row flex-col gap-2">
                <Field name="travelDates" component={PromoFormDateRangePicker} />

                <div className="flex flex-row gap-2 xl:w-2/6 lg:w-full">
                  <Field name="departure" component={PromoFormDeparturePlace} />
                  <Field name="arrival" component={PromoFormArrivalPlace} />
                </div>

                <Field name="tickets" component={PromoFormTickets} />

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
