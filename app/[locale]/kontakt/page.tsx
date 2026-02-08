"use client";
import React, { useState, FormEvent } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { IoMdContacts } from "react-icons/io";
import { CgArrowTopRightO } from "react-icons/cg";
import { useUserPreferences } from "@/components/providers/UserPreferencesContext";
import { useTranslations } from "next-intl";

interface Errors {
  name?: string;
  surname?: string;
  email?: string;
}

const ContactPage: React.FC = () => {
  const t = useTranslations("ContactPage");
  const { fontSize, highContrast } = useUserPreferences();
  const [state, handleSubmit] = useForm("mwkggozp");
  const [errors, setErrors] = useState<Errors>({});

  const textContrastStyles = highContrast ? "text-[#FFFF00]" : "text-black";
  const bgContrastStyles = highContrast ? "bg-black" : "bg-white";
  const linkContrastStyles = highContrast
    ? "text-[#FFFF00] hover:text-yellow-500"
    : "text-white hover:text-blue-100";
  const inputBgStyles = highContrast ? "bg-[#333]" : "bg-gray-50";

  const validateForm = (data: FormData) => {
    const newErrors: Errors = {};

    if (!data.get("name")) {
      newErrors.name = t("errors.nameRequired");
    }

    if (!data.get("surname")) {
      newErrors.surname = t("errors.surnameRequired");
    }

    const email = data.get("email") as string;
    if (!email) {
      newErrors.email = t("errors.emailRequired");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = t("errors.emailInvalid");
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return false;
    }

    setErrors({});
    return true;
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    if (validateForm(formData)) {
      handleSubmit(formData);
    }
  };

  return (
    <section id="contact" className="w-full bg-white/90">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-full">
        <div className="relative w-full h-64 md:h-auto">
          <Image
            src="/assets/kontakt.jpg"
            fill
            alt={t("imageAlt")}
            className="object-cover"
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="px-6 md:px-20 py-10 md:py-20 flex flex-col">
          <h4 className="text-2xl md:text-3xl font-semibold text-blue-600 tracking-[-0.2rem] flex gap-2 items-center mb-3">
            <IoMdContacts />
            {t("contact")}
          </h4>
          <div className="">
            <h3
              className={`text-3xl md:text-5xl tracking-tighter font-semibold mb-4 ${textContrastStyles}`}
            >
              {t("contactUs")}
            </h3>
            <p className="mb-4 text-base md:text-lg leading-7 text-gray-600">
              {t("contactDescription")}
            </p>
            <div className="my-10">
              <h5
                className={`text-xl md:text-2xl font-semibold tracking-tight mb-4 ${textContrastStyles}`}
              >
                {t("contactInfo")}
              </h5>
              <p className="flex gap-2 items-center mb-2 text-base md:text-lg leading-7 text-gray-600  tracking-tight">
                <FaMapMarkerAlt className="text-blue-600" />
                {t("address")}
              </p>
              <p className="flex gap-2 items-center mb-2 text-base md:text-lg leading-7 text-gray-600  tracking-tight">
                <FaPhoneAlt className="text-blue-600" />
                {t("phone")}
              </p>
              <p className="flex gap-2 items-center mb-2 text-base md:text-lg leading-7 text-gray-600  tracking-tight">
                <FaEnvelope className="text-blue-600" />
                {t("email")}{" "}
                <a
                  href="mailto:nowekwalifikacjerybnik@gmail.com"
                  className="underline hover:no-underline text-gray-800"
                >
                  nowekwalifikacjerybnik@gmail.com
                </a>
              </p>
            </div>

            <form onSubmit={handleFormSubmit}>
              <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    className={`block mb-2 font-semibold ${textContrastStyles}`}
                    htmlFor="name"
                  >
                    {t("form.name")}
                    <span className="text-blue-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={t("form.namePlaceholder")}
                    aria-required="true"
                    className={`w-full p-3 rounded-md ${inputBgStyles} ${textContrastStyles} border border-gray-300 focus:border-blue-500`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
                <div>
                  <label
                    className={`block mb-2 font-semibold ${textContrastStyles}`}
                    htmlFor="surname"
                  >
                    {t("form.surname")}
                    <span className="text-blue-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    placeholder={t("form.surnamePlaceholder")}
                    aria-required="true"
                    className={`w-full p-3 rounded-md ${inputBgStyles} ${textContrastStyles} border border-gray-300 focus:border-blue-500`}
                  />
                  {errors.surname && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.surname}
                    </p>
                  )}
                  <ValidationError
                    prefix="Surname"
                    field="surname"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className={`block mb-2 font-semibold ${textContrastStyles}`}
                  htmlFor="email"
                >
                  {t("form.email")}
                  <span className="text-blue-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t("form.emailPlaceholder")}
                  aria-required="true"
                  className={`w-full p-3 rounded-md ${inputBgStyles} ${textContrastStyles} border border-gray-300 focus:border-blue-500`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="mb-4">
                <div className="flex justify-between">
                  <label
                    className={`block mb-2 font-semibold ${textContrastStyles}`}
                    htmlFor="message"
                  >
                    {t("form.message")}
                  </label>
                  <p className="text-sm text-zinc-400">
                    {t("form.messageLimit")}
                  </p>
                </div>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder={t("form.messagePlaceholder")}
                  className={`w-full p-3 rounded-md ${inputBgStyles} ${textContrastStyles} border border-gray-300 focus:border-blue-500`}
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <button
                aria-label={t("form.submitAriaLabel")}
                type="submit"
                disabled={state.submitting}
                className={`w-fit py-3 px-6 flex gap-2 items-center font-medium rounded-md ${
                  state.succeeded
                    ? "bg-green-500 text-white"
                    : `${linkContrastStyles} bg-blue-500`
                }`}
              >
                {state.submitting ? (
                  <div className="flex items-center gap-2">
                    <span className="loader"></span>
                    {t("form.submitting")}
                  </div>
                ) : state.succeeded ? (
                  t("form.submitSuccess")
                ) : (
                  <>
                    {t("form.submit")}
                    <CgArrowTopRightO />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
