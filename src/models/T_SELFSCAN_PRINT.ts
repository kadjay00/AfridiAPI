import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SELFSCAN_PRINT', {schema: 'dbo' } )
export class T_SELFSCAN_PRINT {

    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'SSP_ID_N',
        })
    public SSP_ID_N: number;

    @Column('varchar', {
        nullable: false,
        length: 8,
        name: 'SSP_IDNUMBER_C',
        })
    public SSP_IDNUMBER_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'SSP_DESCRIPNED_C',
        })
    public SSP_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'SSP_DESCRIPFRA_C',
        })
    public SSP_DESCRIPFRA_C: string | null;

    @Column('bigint', {
        nullable: true,
        name: 'SSP_EANCODE_N',
        })
    public SSP_EANCODE_N: string | null;

    @Column('tinyint', {
        nullable: true,
        name: 'SSP_QUANTITY_N',
        })
    public SSP_QUANTITY_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'SSP_CREATION_DAT',
        })
    public SSP_CREATION_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'SSP_UPDATE_DAT',
        })
    public SSP_UPDATE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'SSP_PRINTED_DAT',
        })
    public SSP_PRINTED_DAT: Date | null;

    @Column('char', {
        nullable: true,
        name: 'SSP_STATUS_C',
        })
    public SSP_STATUS_C: string | null;

}
