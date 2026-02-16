"use client";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Section from "@/components/organisms/Section";
import SectionTitle from "@/components/atoms/SectionTitle";
import { Container, Row, Col } from "@/components/atoms/Grid";
import { useTranslations } from "next-intl";
import classNames from "classnames";
import "@/designSystem/utils.scss";
import TextField from "@/components/atoms/TextField";
import Button from "@/components/atoms/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useSearchParams } from "next/navigation";
import stylesTF from "@/components/atoms/TextField/styles.module.scss";
import { useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import emailjs from "@emailjs/browser";
import BookingTemplate from "@/common/emailTemplates/BookingTemplate";
import Alert from "@/components/atoms/Alert";
import { AlertResponse } from "@/common/globalInterfaces";

const bookingSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  startDate: z.string().min(1),
  endDate: z.string().optional(),
  hours: z.string().optional(),
  activity: z.string().min(1),
  level: z.string().min(1),
  people: z.number().min(1).max(6),
  phone: z.string().min(5),
  email: z.string().email(),
  message: z.string().optional(),
});

type BookingForm = z.infer<typeof bookingSchema>;

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE as string;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE as string;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_KEY as string;

const BookingPage = () => {
  const t = useTranslations("bookingPage");
  const tHeader = useTranslations("header");
  const params = useSearchParams();
  const activityParam = params?.get("activity") || "";

  const activities = [
    { value: "snowboard", label: tHeader("snowboard") },
    { value: "telemark", label: tHeader("telemark") },
    { value: "mountain-bike", label: tHeader("mountainBike") },
  ];

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<AlertResponse | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingForm>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      activity: activityParam || "snowboard",
      people: 1,
    },
  });

  const onSubmit = async (data: BookingForm) => {
    try {
      setLoading(true);
      setAlert(null);

      const htmlContent = renderToStaticMarkup(<BookingTemplate {...data} />);

      const res = await emailjs.send(
        serviceId,
        templateId,
        {
          reciver_email: process.env.NEXT_PUBLIC_RECEIVER_EMAIL,
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          title: `Booking: ${data.activity} - ${data.firstName} ${data.lastName}`,
          message_html: htmlContent,
        },
        publicKey,
      );

      if (res.text === "OK") {
        setAlert({ severity: "success", text: t("submittedMessage") });
        reset();
      } else {
        setAlert({
          severity: "error",
          text: t("errorMessage") || "Error sending booking",
        });
      }
    } catch (error) {
      setAlert({
        severity: "error",
        text: (t("errorMessage") || "Error") + " " + error,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <Header />

      <Section
        style={{
          marginTop: "6rem",
        }}
      >
        <Container>
          <Row>
            <Col>
              <SectionTitle highlight text={t("title")} />
              <p className={classNames("text--p-lg")}>{t("intro")}</p>
            </Col>
          </Row>

          <Row>
            <Col>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col xs={12} lg={4}>
                    <TextField
                      label={t("firstName")}
                      fullWidth
                      {...register("firstName")}
                      error={errors.firstName?.message}
                    />
                  </Col>

                  <Col xs={12} lg={4}>
                    <TextField
                      label={t("lastName")}
                      fullWidth
                      {...register("lastName")}
                      error={errors.lastName?.message}
                    />
                  </Col>

                  <Col xs={12} md={6} lg={4}>
                    <TextField
                      label={t("phone")}
                      fullWidth
                      {...register("phone")}
                      error={errors.phone?.message}
                    />
                  </Col>

                  <Col xs={12} md={6} lg={6}>
                    <TextField
                      label={t("email")}
                      type="email"
                      fullWidth
                      {...register("email")}
                      error={errors.email?.message}
                    />
                  </Col>

                  <Col xs={12} md={6} lg={3}>
                    <TextField
                      label={t("startDate")}
                      type="date"
                      fullWidth
                      {...register("startDate")}
                      error={errors.startDate?.message}
                    />
                  </Col>

                  <Col xs={12} md={6} lg={3}>
                    <TextField
                      label={t("endDate")}
                      type="date"
                      fullWidth
                      {...register("endDate")}
                      error={errors.endDate?.message}
                    />
                  </Col>

                  <Col xs={12} md={6} lg={2}>
                    <div className={stylesTF.wrapper}>
                      <select className={stylesTF.input} {...register("hours")}>
                        <option value="">{t("hours")}</option>
                        <option value="1">1 {t("hourShort") ?? "h"}</option>
                        <option value="2">2 {t("hoursShort") ?? "h"}</option>
                        <option value="3">3 {t("hoursShort") ?? "h"}</option>
                        <option value="4">4 {t("hoursShort") ?? "h"}</option>
                        <option value="full_day">
                          {t("fullDay") ?? "Full day"}
                        </option>
                        <option value="tour">{t("tour") ?? "Tour"}</option>
                      </select>
                      <label className={stylesTF.label}>{t("hours")}</label>
                      {errors.hours && (
                        <span className={stylesTF.errorText}>
                          {errors.hours.message}
                        </span>
                      )}
                    </div>
                  </Col>

                  <Col xs={12} md={6} lg={3}>
                    <div className={stylesTF.wrapper}>
                      <select
                        className={stylesTF.input}
                        {...register("activity")}
                      >
                        {activities.map((a) => (
                          <option key={a.value} value={a.value}>
                            {a.label}
                          </option>
                        ))}
                      </select>
                      <label className={stylesTF.label}>{t("activity")}</label>
                      {errors.activity && (
                        <span className={stylesTF.errorText}>
                          {errors.activity.message}
                        </span>
                      )}
                    </div>
                  </Col>

                  <Col xs={12} md={6} lg={3}>
                    <div className={stylesTF.wrapper}>
                      <select className={stylesTF.input} {...register("level")}>
                        <option value="">{t("levelSelect")}</option>
                        <option value="beginner">{t("levelBeginner")}</option>
                        <option value="intermediate">
                          {t("levelIntermediate")}
                        </option>
                        <option value="advanced">{t("levelAdvanced")}</option>
                      </select>
                      <label className={stylesTF.label}>{t("level")}</label>
                      {errors.level && (
                        <span className={stylesTF.errorText}>
                          {errors.level.message}
                        </span>
                      )}
                    </div>
                  </Col>

                  <Col xs={12} md={6} lg={2}>
                    <TextField
                      label={t("people")}
                      type="number"
                      fullWidth
                      {...register("people", { valueAsNumber: true })}
                      error={errors.people?.message}
                    />
                  </Col>

                  <Col xs={12}>
                    <TextField
                      label={t("message")}
                      multiline
                      rows={6}
                      fullWidth
                      {...register("message")}
                      error={errors.message?.message}
                    />
                  </Col>

                  <Col xs={12}>
                    <Button
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                      disabled={loading || isSubmitting}
                    >
                      {loading ? t("loading") : t("send")}
                    </Button>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>

          {alert && (
            <Row>
              <Col>
                <Alert
                  variant="outlined"
                  severity={alert.severity}
                  onClose={() => setAlert(null)}
                >
                  {alert.text}
                </Alert>
              </Col>
            </Row>
          )}

          <Row>
            <Col>
              <h3 className={classNames("text--h-sm")}>{t("termsTitle")}</h3>
              <p className={classNames("text--p-lg")}>
                {t.rich("terms.p1", { br: () => <br /> })}
              </p>
            </Col>
          </Row>
        </Container>
      </Section>

      <Footer />
    </main>
  );
};

export default BookingPage;
