import React from "react";
import styles from "./Header.module.css";
import { contact as contactData } from "../../assets/data/contact";
import { NavItem } from "./NavItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SiyahImza from '../../siyahimza.png'

export class Header extends React.Component {
  constructor() {
    super();
    this.state = { isShown: false, currentPage: "home" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const newPage = e.currentTarget.getAttribute("value")
      ? e.currentTarget.getAttribute("value")
      : this.state.currentPage;

    this.setState({
      isShown: !this.state.isShown,
      currentPage: newPage
    });
  }

  blogClick(e){

  }


  render() {
    return (
      <header className={styles.header}>
        <div>
          <img style={{width :270,height:70}} src={SiyahImza} alt="hasantunahan"/>
          {/* <p className={styles.name}>{contactData.name}</p> */}
          {/* <p className={styles.job}>{contactData.job}</p> */}
        </div>
        <nav
          className={
            styles.navBar + " " + (this.state.isShown ? styles.show : "")
          }
        >
          <FontAwesomeIcon
            icon={faBars}
            className={styles.icon}
            onClick={this.handleClick}
          />
          <FontAwesomeIcon
            id="close"
            icon={faTimes}
            className={styles.icon + " " + styles.close}
            onClick={this.handleClick}
          />
          <ul>
            <NavItem
              id="nav_home"
              target="/"
              value="Anasayfa"
              onClick={this.handleClick}
              currentPage={this.state.currentPage}
            />
            <NavItem
              id="nav_resume"
              target="/resume"
              value="Tecrube"
              onClick={this.handleClick}
              currentPage={this.state.currentPage}
            />
            <NavItem
              id="nav_projects"
              target="/projects"
              value="Projeler"
              onClick={this.handleClick}
              currentPage={this.state.currentPage}
            />
            <NavItem
               id="nav_blog"
               target="/blog"
               value="Blog"
               onClick={this.handleClick}
               currentPage={this.state.currentPage}
            />
          </ul>
        </nav>
      </header>
    );
  }
}
