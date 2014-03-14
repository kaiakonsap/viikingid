<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'vikings');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '&fd?:UPQng~&}y[u<KEW`Xt8v/YD:2GMm@zf4UJ4+38HdBo9b^+Qe&#A)+qb>`}L');
define('SECURE_AUTH_KEY',  'f !Hv0x41YJkIbzOHF.!0Wk?GD2r!AxslCm&z6&zr.yEh3<C^$.$L bISAv3^Lja');
define('LOGGED_IN_KEY',    '~q6y`uM={bOo0{jf;84H!c<o9^3$pP*aHw[7^:7j kU*`U-3cG7jky})&!z)}gh3');
define('NONCE_KEY',        '3][2W!* Ha7[V)cF?9VHXhWWn-Kwo^o66q+3.S&}1ac*$W,KV(J3ESm|lHML1v,-');
define('AUTH_SALT',        'y)D3Y(u`!7L~m6o|nJ!U;q<AN[ukcyLR|j^M!,@>~EdGL_%H{4~YKOD3}c=HV610');
define('SECURE_AUTH_SALT', '2)f%`{g3n014K:~q].]|:=&Ym&Jsj{4)Ynv =ND*JTyxuHpA?~HBaze06k;3&K)@');
define('LOGGED_IN_SALT',   '9]LKdD ^hjqO:tE<ZtedbsI-<(gRn_.Sb`;5_oFK:o>h#YYYA1t5@a-4pkWG1=Os');
define('NONCE_SALT',       '/UCt}G9Ab!:u2cE~:7KN*(W]k,4sS@.!l) pPKFBwW-Ae7qZ)a6w/FW1*+6H2X&6');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
