<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'manas_rs' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Y?-S/$>N8k%Hce$6C`vlY y},W-]Cf)a%UUuKmywt@u^?@Y`lO5{+{GNkj EH~SN' );
define( 'SECURE_AUTH_KEY',  '=jRpSJ0Z?Y|d_8xJYL )eyC]^mtgvwpC:?]-#9{9q&9{H`GAG]3uUm-mtuf?iSk1' );
define( 'LOGGED_IN_KEY',    '4=`S6){:j9tbSL/=Cw~/vgYtW|@|84I6/Wj+/}t]P06X3?fX91;xaoq.&W]xVP<s' );
define( 'NONCE_KEY',        '>NUXglP#@xrO&2B)wVEIZQ}t$q~I-iY)Rmi+$qIyibDp,i#GT(`o0D|[@^X3,&tm' );
define( 'AUTH_SALT',        '2Dr!sg, i%V_6Ad*],Air+M_jW~3TT2@aX[H`T$W2O82)obIFt]4N?gYdkZW8tZ5' );
define( 'SECURE_AUTH_SALT', '`1s%(<R?ujV8~3%LPWCn@Lf<qeV@q]|N-_;LE^i2NA=F.ipz519rf^[1R{c9(>la' );
define( 'LOGGED_IN_SALT',   'dtR3mA.}2QxaP d=c~mO+G(@Et#*SydZIlo9iV0p]l;= 5Zm7JTniMbdD[f?-zfr' );
define( 'NONCE_SALT',       '>v5Gs8~;?(/}AVW*^zV3XrQyE$JE<w5#:4je%|BQ`]}wm.D`b&T<-DU~sw0K8LQ1' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
