import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_HANDTERMINAL', {schema: 'dbo' } )
@Index('IX_HANDTERMINAL_PKINDEX', ['HTN_HTPROGRAMID_C', 'HTN_HANDTERMINALNBR_N'], {unique: true})
export class T_HANDTERMINAL {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'HTN_HTPROGRAMID_C',
        })
    public HTN_HTPROGRAMID_C: string;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'HTN_HANDTERMINALNBR_N',
        })
    public HTN_HANDTERMINALNBR_N: number;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'HTN_DESCRIPNED_C',
        })
    public HTN_DESCRIPNED_C: string;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'HTN_DESCRIPFRA_C',
        })
    public HTN_DESCRIPFRA_C: string;

    @Column('int', {
        nullable: true,
        name: 'HTN_VALUE1_N',
        })
    public HTN_VALUE1_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'HTN_VALUE2_N',
        })
    public HTN_VALUE2_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'HTN_FLAG1_C',
        })
    public HTN_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'HTN_FLAG2_C',
        })
    public HTN_FLAG2_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'HTN_USERID_C',
        })
    public HTN_USERID_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 5,
        name: 'HTN_PDTVERSION_C',
        })
    public HTN_PDTVERSION_C: string | null;

}
