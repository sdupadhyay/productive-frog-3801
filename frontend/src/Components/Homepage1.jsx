import React from "react";

export default function Component() {
  return (
    <div style={{ marginTop: "15rem" }}>
      <div
        className="page-padding"
        style={{
          boxSizing: "border-box",
          paddingRight: "2.5rem",
          paddingLeft: "2.5rem",
        }}
      >
        <div
          className="container-large flex home-hero"
          style={{
            boxSizing: "border-box",
            width: "100%",
            maxWidth: "70rem",
            marginRight: "auto",
            marginLeft: "auto",
            position: "relative",
            display: "flex",
            WebkitBoxAlign: "start",
            alignItems: "flex-start",
            WebkitBoxPack: "justify",
            justifyContent: "space-between",
          }}
        >
          <div
            className="flex-left is-mobile-100"
            style={{ boxSizing: "border-box", width: "50%" }}
          >
            <div
              className="margin-bottom margin-large"
              style={{
                boxSizing: "border-box",
                margin: "1.25rem",
                marginTop: "0px",
                marginRight: "0px",
                marginLeft: "0px",
              }}
            >
              <h1
                className="heading-xlarge-44 amerigo"
                style={{
                  boxSizing: "border-box",
                  margin: "0.67em 0px",
                  color: "rgb(76, 82, 90)",
                  fontWeight: 400,
                  marginTop: "0px",
                  marginBottom: "0px",
                  fontSize: "2.75rem",
                  lineHeight: "130%",
                  fontFamily: "Domino",
                }}
              >
                Everything you need to run your business.
              </h1>
            </div>
            <div
              className="margin-bottom margin-huge"
              style={{
                boxSizing: "border-box",
                margin: "2.5rem",
                marginTop: "0px",
                marginRight: "0px",
                marginLeft: "0px",
              }}
            >
              <div
                className="text-size-medium-20 text-weight-semibold text-color-dimgrey"
                style={{
                  boxSizing: "border-box",
                  fontSize: "1.25rem",
                  lineHeight: "140%",
                  fontWeight: 600,
                }}
              >
                Bonsai’s all-in-one product suite with smart automation lets you
                focus on your passion, not your paperwork.
              </div>
            </div>
            <div
              className="w-form"
              style={{ boxSizing: "border-box", margin: "0px 0px 15px" }}
            >
              <form
                id="wf-form-Longtail-Form"
                className="email-form"
                name="wf-form-Longtail-form"
                aria-label="Longtail form"
                method="get"
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  WebkitBoxAlign: "center",
                  alignItems: "center",
                  lineHeight: "20px",
                }}
              >
                <input
                  id="email"
                  className="field-style w-input"
                  name="Email"
                  type="email"
                  maxLength="256"
                  required
                  placeholder="Enter your email"
                  style={{
                    boxSizing: "border-box",
                    font: "inherit",
                    margin: "0px",
                    padding: "8px 12px",
                    display: "block",
                    width: "100%",
                    lineHeight: 1.42857,
                    color: "rgb(51, 51, 51)",
                    verticalAlign: "middle",
                    backgroundColor: "rgb(255, 255, 255)",
                    border: "2px solid rgb(1, 178, 137)",
                    height: "70px",
                    marginBottom: "0px",
                    paddingRight: "10px",
                    paddingLeft: "28px",
                    borderTopLeftRadius: "4px",
                    borderBottomLeftRadius: "4px",
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                />
                <input
                  id="longtail-form-button"
                  className="cta-submit w-button"
                  type="submit"
                  defaultValue="Start Free"
                  style={{
                    boxSizing: "border-box",
                    font: "inherit",
                    margin: "0px",
                    padding: "9px 15px",
                    border: "0px",
                    textDecoration: "none",
                    borderRadius: "0px",
                    display: "inline-block",
                    color: "rgb(255, 255, 255)",
                    lineHeight: "inherit",
                    cursor: "pointer",
                    height: "70px",
                    paddingRight: "37px",
                    paddingLeft: "37px",
                    borderTopRightRadius: "4px",
                    borderBottomRightRadius: "4px",
                    backgroundColor: "rgb(0, 178, 137)",
                    fontSize: "14px",
                    fontWeight: 700,
                    letterSpacing: "0.6px",
                    textTransform: "uppercase",
                    appearance: "button",
                  }}
                />
              </form>
              <div
                className="form-success-message w-form-done"
                aria-label="Longtail form success"
                role="region"
                tabIndex="-1"
                style={{
                  boxSizing: "border-box",
                  padding: "20px",
                  display: "none",
                  textAlign: "center",
                  backgroundColor: "transparent",
                  color: "rgb(0, 178, 137)",
                  fontSize: "20px",
                }}
              >
                <div style={{ boxSizing: "border-box" }}>
                  Securing your account...
                </div>
              </div>
              <div
                className="w-form-fail"
                aria-label="Longtail form failure"
                role="region"
                tabIndex="-1"
                style={{
                  boxSizing: "border-box",
                  padding: "10px",
                  display: "none",
                  marginTop: "10px",
                  backgroundColor: "rgb(255, 222, 222)",
                }}
              >
                <div style={{ boxSizing: "border-box" }}>
                  Oops! Something went wrong while submitting the form.
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex-right width-70 is-mobile-100"
            style={{ boxSizing: "border-box", paddingLeft: "5%", width: "70%" }}
          >
            <img
              className="image-hero"
              width={674}
              alt="Hero"
              sizes="(max-width: 479px) 85vw, (max-width: 767px) 47vw, (max-width: 991px) 53vw, 56vw"
              src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/60dc499268d597166db997aa_bonsai_hero-opt-2.png"
              srcSet="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/60dc499268d597166db997aa_bonsai_hero-opt-2-p-500.png 500w, https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/60dc499268d597166db997aa_bonsai_hero-opt-2.png 1578w"
              style={{
                boxSizing: "border-box",
                border: "0px",
                verticalAlign: "middle",
                display: "inline-block",
                position: "relative",
                left: "89px",
                top: "-51px",
                width: "112%",
                maxWidth: "112%",
              }}
            />
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  box-sizing: border-box;
  font-family: sans-serif;
  height: 100%;
  text-size-adjust: none;
}

body {
  box-sizing: border-box;
  margin: 0px;
  min-height: 100%;
  background-color: rgb(255, 255, 255);
  font-family: "Proximanova opt", sans-serif;
  color: rgb(76, 82, 90);
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
}
`,
        }}
      />
    </div>
  );
}
