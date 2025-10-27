import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Wallet() {
  const [showBalance, setShowBalance] = useState(true);
  const balance = 125000;
  const balanceText = showBalance ? 'Hide Balance' : 'Show Balance'

  return (
    <>
      <View style={{paddingHorizontal: 24, paddingTop: 30}}>
        <Text style={styles.headerTitle}>Wallet</Text>
      </View>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.balanceRow}>
          <Text style={styles.balanceLabel}>Total Balance</Text>

          <TouchableOpacity
            style={styles.eyeButton}
            onPress={() => setShowBalance(!showBalance)}
          >
            <Ionicons
              name={showBalance ? "eye" : "eye-off"}
              size={20}
              color="#7E7E7E"
            />
            <Text>{balanceText}</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.balanceValue}>
          {showBalance ? `₦${balance.toLocaleString()}` : "₦***,***"}
        </Text>

        <View style={styles.walletContainer}>
          <Image source={require("../../../assets/wallet.png")} />
          <View style={styles.actionRow}>
            <TouchableOpacity
              style={[styles.actionButton, { backgroundColor: "#FB6619" }]}
            >
              <Ionicons name="arrow-up-circle" size={16} color="#fff" />
              <Text style={styles.actionText}>Withdraw</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.actionButton, { backgroundColor: "#00A86B" }]}
            >
              <Ionicons name="arrow-down-circle" size={16} color="#fff" />
              <Text style={styles.actionText}>Deposit</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.cardContainer}>
          <View style={styles.earningsHeader}>
            <Text style={styles.earningsTitle}>Earnings Overview</Text>
            <View style={styles.toggleButtons}>
              <TouchableOpacity
                style={[styles.toggle, { backgroundColor: "#FB6619" }]}
              >
                <Text style={styles.toggleTextActive}>Week</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.toggle}>
                <Text style={styles.toggleText}>Month</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.totalEarnings}>₦360,000</Text>

          <View style={styles.earningsRow}>
            <View style={styles.earningBlock}>
              <Text style={styles.earningLabel}>Total Earned</Text>
              <Text style={styles.earningValue}>₦480,000</Text>
            </View>
            <View style={styles.earningBlock}>
              <Text style={styles.earningLabel}>Total Withdrawn</Text>
              <Text style={styles.earningValue}>₦120,000</Text>
            </View>
          </View>
        </View>

        <View style={styles.providersContainer}>
          <View style={styles.providersHeader}>
            <Text style={styles.providerTitle}>Secure Payment Provider</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.providerList}>
            <View style={styles.providerItem}>
              <Image
                source={
                  require('../../../assets/paystack.png')
                }
                style={styles.providerLogo}
              />
              <Text style={styles.providerText}>Paystack</Text>
            </View>

            <View style={styles.providerItem}>
              <Image
                source={
                  require('../../../assets/opay.png')
                }
                style={styles.providerLogo}
              />
              <Text style={styles.providerText}>Opay</Text>
            </View>

            <View style={styles.providerItem}>
              <Ionicons name="add-circle" size={32} color="#FB6619" />
              <Text style={styles.providerText}>Add New</Text>
            </View>
          </View>
        </View>

        <View style={styles.transactionContainer}>
          <Text style={styles.transactionTitle}>Recent Transactions</Text>

          <View style={styles.transactionCard}>
            <View style={styles.transactionLeft}>
              <Ionicons name="briefcase-outline" size={22} color="#FB6619" />
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.jobTitle}>Frontend Developer</Text>
                <Text style={styles.jobDesc}>Website redesign project</Text>
                <View style={styles.jobMetaRow}>
                  <Text style={styles.jobMeta}>1 hour ago</Text>
                  <Text style={styles.jobStatus}>Completed</Text>
                </View>
              </View>
            </View>
            <View style={styles.transactionRight}>
              <Text style={styles.jobPrice}>₦25,000</Text>
              <Ionicons name="add-circle-outline" size={18} color="#FB6619" />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F4F4F4", padding: 24 },
  headerTitle: {
    fontFamily: "opensans_semibold",
    fontSize: 20,
    color: "#FB6619",
    marginTop: 30,
  },
  balanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    alignItems: "center",
  },
  balanceLabel: { fontFamily: "poppins_medium", fontSize: 14, color: "#000" },
  eyeButton: { padding: 5, flexDirection: 'row', borderColor: '#B4B4B4', borderWidth: 1, borderRadius: 18, paddingHorizontal: 10, gap: 4 },
  balanceValue: {
    fontFamily: "poppins_bold",
    fontSize: 30,
    color: "#000",
    marginTop: 8,
  },
  walletContainer: {
    alignItems: "center",
    marginTop: 30,
    position: "relative",
  },
  card: {
    width: 230,
    height: 120,
    borderRadius: 15,
    padding: 16,
    justifyContent: "space-between",
    position: "absolute",
  },
  cardText: { color: "white", fontFamily: "opensans_semibold", fontSize: 18 },
  cardNumber: { color: "white", fontFamily: "poppins_medium", fontSize: 13 },
  walletBody: {
    backgroundColor: "#8B5A2B",
    width: 240,
    height: 100,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 23,
    width: 300,
  },
  actionButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    paddingVertical: 8,
    borderRadius: 18,
    marginHorizontal: 5,
  },
  actionText: { color: "white", fontFamily: "poppins_medium", fontSize: 13 },

  cardContainer: {
    backgroundColor: "white",
    borderRadius: 14,
    padding: 16,
    marginTop: 30,
  },
  earningsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  earningsTitle: { fontFamily: "opensans_semibold", fontSize: 15 },
  toggleButtons: { flexDirection: "row", gap: 8 },
  toggle: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  toggleText: { fontFamily: "poppins_regular", fontSize: 12, color: "#7E7E7E" },
  toggleTextActive: {
    fontFamily: "poppins_medium",
    fontSize: 12,
    color: "white",
  },
  totalEarnings: {
    fontFamily: "poppins_bold",
    fontSize: 24,
    marginTop: 8,
  },
  earningsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  earningBlock: {},
  earningLabel: {
    fontFamily: "poppins_regular",
    fontSize: 13,
    color: "#7E7E7E",
  },
  earningValue: {
    fontFamily: "poppins_medium",
    fontSize: 15,
    color: "#000",
  },

  providersContainer: { marginTop: 30 },
  providersHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  providerTitle: { fontFamily: "opensans_semibold", fontSize: 15 },
  viewAll: {
    fontFamily: "poppins_medium",
    fontSize: 13,
    color: "#FB6619",
  },
  providerList: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  providerItem: { alignItems: "center" },
  providerLogo: { width: 40, height: 40, borderRadius: 8, marginBottom: 4 },
  providerText: {
    fontFamily: "poppins_regular",
    fontSize: 12,
    color: "#000",
  },

  transactionContainer: { marginTop: 30, marginBottom: 40 },
  transactionTitle: { fontFamily: "opensans_semibold", fontSize: 16 },
  transactionCard: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14,
    alignItems: "center",
  },
  transactionLeft: { flexDirection: "row", alignItems: "flex-start", flex: 1 },
  jobTitle: {
    fontFamily: "poppins_medium",
    fontSize: 14,
    color: "#000",
  },
  jobDesc: {
    fontFamily: "poppins_regular",
    fontSize: 12,
    color: "#7E7E7E",
  },
  jobMetaRow: { flexDirection: "row", gap: 10, marginTop: 2 },
  jobMeta: { fontSize: 11, color: "#7E7E7E", fontFamily: "poppins_regular" },
  jobStatus: { fontSize: 11, color: "#00A86B", fontFamily: "poppins_medium" },
  transactionRight: { alignItems: "flex-end" },
  jobPrice: { fontFamily: "poppins_medium", color: "#FB6619", fontSize: 13 },
});
