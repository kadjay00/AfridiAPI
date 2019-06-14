import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SPY_SHIPPINGS_SMARTPICK', {schema: 'dbo' } )
export class T_SPY_SHIPPINGS_SMARTPICK {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // precision:9,
        // scale:0,
        name: 'SPS_SPYID_N',
        })
    public SPS_SPYID_N: number;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'SPS_IDNUMBER_C',
        })
    public SPS_IDNUMBER_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'SPS_DATE_DAT',
        })
    public SPS_DATE_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 3,
        name: 'SPS_MODULE_C',
        })
    public SPS_MODULE_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 16,
        name: 'SPS_USERID_C',
        })
    public SPS_USERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 25,
        name: 'SPS_COMPUTER_C',
        })
    public SPS_COMPUTER_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'SPS_OLD_SHIPPINGUNIT_D',
        })
    public SPS_OLD_SHIPPINGUNIT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'SPS_OLD_SHIPPINGUNIT_STD_D',
        })
    public SPS_OLD_SHIPPINGUNIT_STD_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'SPS_NEW_SHIPPINGUNIT_D',
        })
    public SPS_NEW_SHIPPINGUNIT_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 7,
        scale: 2,
        name: 'SPS_NEW_SHIPPINGUNIT_STD_D',
        })
    public SPS_NEW_SHIPPINGUNIT_STD_D: number | null;

    @Column('varchar', {
        nullable: true,
        name: 'SPS_COMMENT_C',
        })
    public SPS_COMMENT_C: string | null;

}
